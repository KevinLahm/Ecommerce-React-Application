FactoryBot.define do
  factory :product, class: 'Product' do
    image { "MyString" }
    name { "MyString" }
    description { "MyString" }
    price { "9.99" }
    category_id { "MyString" }
    quantity { 1 }
  end
end
