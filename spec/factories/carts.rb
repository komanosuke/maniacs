FactoryBot.define do
  factory :cart do
    association :user
    quantity { 1 }
    status { "active" }
    discount { "none" }
    session_id { "abc123" }
    coupon_code { "XYZ123" }
  end
end
