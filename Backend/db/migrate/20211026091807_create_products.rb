class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :image
      t.string :name
      t.string :description
      t.decimal :price
      t.string :category_id
      t.integer :quantity

      t.timestamps
    end
  end
end
