require 'rails_helper'

RSpec.describe Admin, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      admin = FactoryBot.build(:admin)
      expect(admin).to be_valid
    end

    it "is not valid without a name" do
      admin = FactoryBot.build(:admin, name: nil)
      expect(admin).not_to be_valid
      expect(admin.errors[:name]).to include("can't be blank")
    end

    it "is not valid without a password" do
      admin = FactoryBot.build(:admin, password: nil)
      expect(admin).not_to be_valid
      expect(admin.errors[:password]).to include("can't be blank")
    end
  end
end
