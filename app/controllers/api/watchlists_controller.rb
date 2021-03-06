class Api::WatchlistsController < ApplicationController
  before_action :require_logged_in, only: [:index, :create, :destroy]

  def index
    # @watchlists = Watchlist.all
    # render :index
    @watchlists = [];
    current_user.profiles.includes(:videos).each do |profile|
      @watchlists += profile.watchlists
    end

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
      render :show
    else
      render json: ['Watchlist item cannot be added!'], status: 422
    end
  end

  def destroy
    @watchlist = Watchlist.find(params[:id])

    if @watchlist
      @watchlist.destroy
      render :show
    else
      render json: ['Watchlist cannot be deleted'], status: 422
    end
  end

  private
  def watchlist_params
    params.require(:watchlist).permit(:profile_id, :video_id)
  end

end
