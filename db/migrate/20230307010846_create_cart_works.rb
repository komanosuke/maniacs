class CreateCartWorks < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_works do |t|
      t.references :cart, foreign_key: true, null: false
      t.references :work, foreign_key: true, null: false
      t.string :status
      t.string :message

      t.timestamps
    end
  end
end
