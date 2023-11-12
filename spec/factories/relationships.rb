FactoryBot.define do
  factory :relationship do
    association :follower, factory: :user  # フォロワーとの関連付け
    association :followed, factory: :user  # フォローされたユーザーとの関連付け
  end
end
