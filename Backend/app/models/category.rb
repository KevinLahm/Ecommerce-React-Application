class Category < ApplicationRecord
  validates :image, presence: true
  validates :name, presence: true

  has_many  :products
end
