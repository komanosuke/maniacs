class CreateWorkCats < ActiveRecord::Migration[6.1]
  def change
    create_table :work_cats do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
