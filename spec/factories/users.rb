FactoryBot.define do
  factory :user do
    name { "John Doe" }
    username { "johndoe" }
    email { "johndoe@example.com" }
    password { 'password' }
    zip { "1234567" }
    prefecture { "Tokyo" }
    city { "Shinjuku" }
    street { "Main Street" }
    address { "1-2-3" }
    tel { "123-456-7890" }
    image { Rack::Test::UploadedFile.new(Rails.root.join('spec', 'fixtures', 'noimage.jpg'), 'image/jpeg') }
    profile { "This is my profile." }
    # remember_digest { SecureRandom.hex }
    # activation_digest { SecureRandom.hex }
    activated { true }
    activated_at { Time.zone.now }
    # reset_digest { SecureRandom.hex }
    reset_sent_at { Time.zone.now }
    introduction { "Hello, I'm John Doe." }
  end
end