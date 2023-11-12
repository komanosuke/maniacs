class CreateNews < ActiveRecord::Migration[6.1]
  def change
    create_table :news do |t|
      t.references :news_cat, foreign_key: true, null: false
      t.string :title, null: false
      t.string :image, null: false
	    t.string :image_title
      t.text :text, null: false
      
      t.timestamps
    end
  end
end
