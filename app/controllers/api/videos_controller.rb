class Api::VideosController < ApplicationController
  def index
    @videos = Video.all.includes(:genres)
    render :index
  end

  def show
    @video = Video.find(params[:id])
    render :show
  end

end
