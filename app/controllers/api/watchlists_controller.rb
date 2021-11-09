class Api::WatchlistsController < ApplicationController
  before_action :require_logged_in, only: [:index, :create, :destroy]

  def index
    @watchlists = Watchlist.all
    render :index
  end

  def show
    @watchlist = Watchlist.find_by(id: params[:id])

    if @watchlist
      render :show
    else
      render json: ['Watchlist not found'], status: 422
    end
  end

  def create
    @watchlist = Watchlist.new(watchlist_params)

    if @watchlist.save
      # may change this later
      render :index
    else
      render json: ['Watchlist item cannot be added!'], status: 422
    end
  end

  def destroy
    @watchlist = Watchlist.find(params[:id])
    # @watchlist = Watchlist.find_by(video_id: watchlist_params[:video_id], profile_id: watchlist_params[:profile_id])

    if @watchlist
      @watchlist.destroy
      # render :index
    else
      render json: ['Watchlist cannot be deleted']
    end
  end

  private
  def watchlist_params
    params.require(:watchlist).permit(:profile_id, :video_id)
  end

end
