class Api::VideosController < ApplicationController
  def index
    # @videos = Video.all.includes(:genres)
    @videos = Video.with_attached_thumbnail.all.includes(:genres)
    render :index
  end

  def show
    # @video = Video.with_attached_background.find(params[:id])
    @video = Video.with_attached_background.with_attached_file.find(params[:id])
    render :show
  end

end
