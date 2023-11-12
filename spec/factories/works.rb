FactoryBot.define do
  factory :work do
    association :work_cat
    title { "Work Title" }
    image { Rack::Test::UploadedFile.new(Rails.root.join('spec', 'fixtures', 'noimage.jpg'), 'image/jpeg') }
    price { 100000 }
    text { "Work description" }
    onlyone { 0 }
    status { 1 }
  end
end
