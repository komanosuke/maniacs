FactoryBot.define do
  factory :cart_work do
    association :cart
    association :work
    status { "soldout" }
  end
end
