class ApartmentsController < ApplicationController

  def index
    apartments = Apartment.all
    render json:apartments
  end

  def create
    apartment = Apartment.create(apartment_params)
    if apartment.valid? then render json:apartment
    else render json:apartment.erros, status:422
    end
  end

  private
  def apartment_params
    params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets)
  end

end
