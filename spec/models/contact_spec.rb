require 'rails_helper'

RSpec.describe Contact, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      contact = FactoryBot.build(:contact)
      expect(contact).to be_valid
    end
    
    it "is not valid without a name" do
      contact = FactoryBot.build(:contact, name: nil)
      expect(contact).not_to be_valid
    end
    
    it "is not valid without an email" do
      contact = FactoryBot.build(:contact, email: nil)
      expect(contact).not_to be_valid
    end
    
    it "is not valid without a phone number" do
      contact = FactoryBot.build(:contact, phone_number: nil)
      expect(contact).not_to be_valid
    end
    
    it "is not valid without a subject" do
      contact = FactoryBot.build(:contact, subject: nil)
      expect(contact).not_to be_valid
    end
    
    it "is not valid without a message" do
      contact = FactoryBot.build(:contact, message: nil)
      expect(contact).not_to be_valid
    end
  end
end
