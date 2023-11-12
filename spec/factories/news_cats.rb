FactoryBot.define do
  factory :news_cat do
    name { "Sample Category" }
  end
end

class CreateNewsCats < ActiveRecord::Migration[6.1]
  def change
    create_table :news_cats do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end



# 上記のコードとバリデーションに対して、models/xxx_spec.rbの記述はどう書けばいいですか？