class ApartmentsController < ApplicationController
  def index
    apartments = Apartment.all
    render json:apartments
  end
  def create
    apartment = Apartment.create(name: params[:name], age: params[:age], enjoys: params[:enjoys])
    render json:apartments
  end
end
