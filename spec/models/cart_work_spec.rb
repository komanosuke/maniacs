require 'rails_helper'

RSpec.describe CartWork, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      cart_work = FactoryBot.build(:cart_work)
      expect(cart_work).to be_valid
    end
    
    it "is not valid without a cart" do
      cart_work = FactoryBot.build(:cart_work, cart: nil)
      expect(cart_work).not_to be_valid
    end
    
    it "is not valid without a work" do
      cart_work = FactoryBot.build(:cart_work, work: nil)
      expect(cart_work).not_to be_valid
    end
  end
    
  describe "associations" do
    it "belongs to a cart" do
      association = described_class.reflect_on_association(:cart)
      expect(association.macro).to eq(:belongs_to)
    end
    
    it "belongs to a work" do
      association = described_class.reflect_on_association(:work)
      expect(association.macro).to eq(:belongs_to)
    end
  end    
end
