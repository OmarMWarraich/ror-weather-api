class Api::V1::LocationsController < ApiController
  before_action :set_location, only: [:show]

  def index
    @locations = Location.all
  end

  def show

  end

  private

  def set_location
    @location = Location.find(params[:id])
  end
end
