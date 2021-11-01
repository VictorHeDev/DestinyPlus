class Api::ProfilesController < ApplicationController
  before_action :require_logged_in, only: [:index, :create, :update, :show, :destroy]




end
