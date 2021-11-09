class Api::WatchlistsController < ApplicationController

  def show
    @watchlist = Watchlist.find_by(id: params[:id])

    if @watchlist
      render :show
    else
      render json: ['Watchlist not found'], status: 422
    end
  end

  def update
    @watchlist = Watchlist.find(params[:id])

    if @profile.update(profile_params)
      render :show
    else
      render json: ['Watchlist did not update'], status: 404
    end
  end

  def destroy
    @watchlist = Watchlist.find(params[:id])

    if @watchlist
      @watchlist.destroy
    else
      render json: ['Watchlist cannot be deleted']
    end
  end

  private
  def watchlist_params
    params.require(:watchlist).permit(:profile_id, :video_id)
  end

end
