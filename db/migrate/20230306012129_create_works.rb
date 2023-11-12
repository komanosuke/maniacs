class CreateWorks < ActiveRecord::Migration[6.1]
  def change
    create_table :works do |t|
      t.references :work_cat, foreign_key: true, null: false
      t.string :title, null: false
      t.string :image, null: false
      t.integer :price, null: false
      t.text :text, null: false
      t.integer :onlyone, null: false
      t.integer :status, null: false
      
      t.timestamps
    end
  end
end
