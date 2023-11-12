FactoryBot.define do
  factory :contact do
    name { "John Doe" }
    email { "john@example.com" }
    phone_number { "1234567890" }
    subject { 0 }
    message { "Hello, this is a sample message." }
  end
end
