class Api::V1::ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

  def index
    @products = Product.all

    render json: @products
  end

  def show
    render json: @product
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      render json: @product, status: :created, location: @api_v1_product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @product.destroy
  end

  private
    def set_product
      @product = Product.find(params[:id])
    end

    def product_params
      params.require(:product).permit(:image, :name, :description, :price, :category_id, :quantity)
    end
end
