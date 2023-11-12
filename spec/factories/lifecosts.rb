FactoryBot.define do
  factory :lifecost do
    user { association(:user) }

    twenty { 3000000 }
    thirty { 4000000 }
    forty { 5000000 }
    fifty { 6000000 }
    sixty { 2000000 }

    marriage { 0 }
    child { 0 }
    house { 0 }
    car { 0 }
    care { 0 }

    rent { 0 }
    utility { 0 }
    internet { 0 }
    insurance { 0 }
    car_cost { 0 }
    child_care { 0 }
    lesson { 0 }
    transport { 0 }
    pocket_money { 0 }
    other_cost { 0 }
    food { 0 }
    necessity { 0 }
    medical_cost { 0 }
    child_lesson { 0 }
    clothes { 0 }
    beauty { 0 }
    companionship { 0 }
    entertainment { 0 }
    small_cost { 0 }
    exception { 0 }
    marriage_total { 5000000 }
    child_total { 24000000 }
    house_total { 40000000 }
    car_total { 5000000 }
    tax { 20 }
    pension { 0 }
  end
end
