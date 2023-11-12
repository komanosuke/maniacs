FactoryBot.define do
  factory :post do
    association :user
    content { "Sample post content" }
    image { Rack::Test::UploadedFile.new(Rails.root.join('spec', 'fixtures', 'noimage.jpg'), 'image/jpeg') }
  end
end
