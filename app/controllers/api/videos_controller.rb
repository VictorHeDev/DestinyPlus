class Api::VideosController < ApplicationController
  def index
    @videos = Videos.all.includes(:genres)
    render :index
  end

  def show
    @video = Video.find(params[:id])
    render :show
  end

end
