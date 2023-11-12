class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.references :user, foreign_key: true
      t.integer :quantity
      t.string :status
      t.string :discount
      t.string :session_id
      t.string :coupon_code

      t.timestamps
    end
  end
end
