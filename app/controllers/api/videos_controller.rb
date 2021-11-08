class Api::VideosController < ApplicationController
  def index
    # @videos = Video.all.includes(:genres)
    @videos = Video.with_attached_thumbnail.all.includes(:genres)

    # @videos = Video.all
    render :index
  end

  def show
    @video = Video.find(params[:id])
    render :show
  end

end
