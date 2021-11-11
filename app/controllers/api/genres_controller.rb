class Api::GenresController < ApplicationController
  def index
    @genres = Genre.all.includes(:videos)
    # look into how to avoid the N + 1 queries
    render :index
  end

  def show
    @genre = Genre.find(params[:id])
    render :show
  end
end
