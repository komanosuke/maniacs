require 'rails_helper'

RSpec.describe Cart, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      cart = FactoryBot.build(:cart)
      expect(cart).to be_valid
    end
  end
end
