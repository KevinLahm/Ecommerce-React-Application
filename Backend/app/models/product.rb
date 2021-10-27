class Product < ApplicationRecord
  validates :image, presence: true
  validates :name, presence: true
  validates :description, presence: true
  validates :price, presence: true
  validates :quantity, presence: true

  belongs_to :category
end
