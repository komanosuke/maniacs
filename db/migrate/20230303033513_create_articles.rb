class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.references :article_cat, foreign_key: true, null: false
      t.string :title, null: false
      t.string :image, null: false
	    t.string :image_title, null: false
      t.text :text, null: false
      
      t.timestamps
    end
  end
end
