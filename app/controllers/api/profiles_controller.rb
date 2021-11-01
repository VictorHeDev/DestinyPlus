class Api::ProfilesController < ApplicationController
  # before_action :require_logged_in, only: [:index, :show, :create, :update, :destroy]

  def index
    @profiles = current_user.profiles
    render :index
  end

  def show
    @profile = Profile.find_by(id: params[:id])

    if @profile
      render :show
    else
      render json: ['Profile not found'], status: 422
    end
  end

  def create
    @profile = Profile.new(profile_params)
    @profile.user_id = current_user.id

    if @profile.save
      render :show
    else
      render json: ['Profile not saved'], status: 404
    end
  end

  def update
    @profile = Profile.find_by(id: profile_params[:id])

    if @profile.update(profile_params)
      render: show
    else
      render json: ['Profile did not update'], status: 404
    end
  end

  def destroy
    @profile = Profile.find_by(id: profile_params[:id])

    if (@profile && current_user.profiles.length > 1)
      @profile.destroy
      render :show
    else
      render json: ['Profile cannot be deleted']
    end

  end

  private
  def profile_params
    params.require(:profile).permit(:name)
  end

end
