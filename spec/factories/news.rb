FactoryBot.define do
  factory :news do
    association :news_cat
    title { "Sample News" }
    image { Rack::Test::UploadedFile.new(Rails.root.join('spec', 'fixtures', 'noimage.jpg'), 'image/jpeg') }
    image_title { "News Image" }
    text { "This is a sample news article." }
  end
end
