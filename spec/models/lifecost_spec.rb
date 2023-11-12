require 'rails_helper'

RSpec.describe Lifecost, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      lifecost = FactoryBot.build(:lifecost)
      expect(lifecost).to be_valid
    end
    
    it "is not valid without a user" do
      lifecost = FactoryBot.build(:lifecost, user: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a twenty value" do
      lifecost = FactoryBot.build(:lifecost, twenty: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a thirty value" do
      lifecost = FactoryBot.build(:lifecost, thirty: nil)
      expect(lifecost).not_to be_valid
    end

    it "is not valid without a forty value" do
      lifecost = FactoryBot.build(:lifecost, forty: nil)
      expect(lifecost).not_to be_valid
    end

    it "is not valid without a sixty value" do
      lifecost = FactoryBot.build(:lifecost, sixty: nil)
      expect(lifecost).not_to be_valid
    end

    it "is not valid without a marriage value" do
      lifecost = FactoryBot.build(:lifecost, marriage: nil)
      expect(lifecost).not_to be_valid
    end

    it "is not valid without a child value" do
      lifecost = FactoryBot.build(:lifecost, child: nil)
      expect(lifecost).not_to be_valid
    end

    it "is not valid without a house value" do
      lifecost = FactoryBot.build(:lifecost, house: nil)
      expect(lifecost).not_to be_valid
    end

    it "is not valid without a car value" do
      lifecost = FactoryBot.build(:lifecost, car: nil)
      expect(lifecost).not_to be_valid
    end

    it "is not valid without a care value" do
      lifecost = FactoryBot.build(:lifecost, care: nil)
      expect(lifecost).not_to be_valid
    end

    it "is not valid without a rent value" do
      lifecost = FactoryBot.build(:lifecost, rent: nil)
      expect(lifecost).not_to be_valid
    end

    it "is not valid without a utility value" do
      lifecost = FactoryBot.build(:lifecost, utility: nil)
      expect(lifecost).not_to be_valid
    end

    it "is not valid without an internet value" do
      lifecost = FactoryBot.build(:lifecost, internet: nil)
      expect(lifecost).not_to be_valid
    end

    it "is not valid without a insurance value" do
      lifecost = FactoryBot.build(:lifecost, insurance: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a car_cost value" do
      lifecost = FactoryBot.build(:lifecost, car_cost: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a child_care value" do
      lifecost = FactoryBot.build(:lifecost, child_care: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a lesson value" do
      lifecost = FactoryBot.build(:lifecost, lesson: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a transport value" do
      lifecost = FactoryBot.build(:lifecost, transport: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a pocket_money value" do
      lifecost = FactoryBot.build(:lifecost, pocket_money: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a other_cost value" do
      lifecost = FactoryBot.build(:lifecost, other_cost: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a food value" do
      lifecost = FactoryBot.build(:lifecost, food: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a necessity value" do
      lifecost = FactoryBot.build(:lifecost, necessity: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a medical_cost value" do
      lifecost = FactoryBot.build(:lifecost, medical_cost: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a child_lesson value" do
      lifecost = FactoryBot.build(:lifecost, child_lesson: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a clothes value" do
      lifecost = FactoryBot.build(:lifecost, clothes: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a beauty value" do
      lifecost = FactoryBot.build(:lifecost, beauty: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a companionship value" do
      lifecost = FactoryBot.build(:lifecost, companionship: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a entertainment value" do
      lifecost = FactoryBot.build(:lifecost, entertainment: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a small_cost value" do
      lifecost = FactoryBot.build(:lifecost, small_cost: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a exception value" do
      lifecost = FactoryBot.build(:lifecost, exception: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a marriage_total value" do
      lifecost = FactoryBot.build(:lifecost, marriage_total: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a child_total value" do
      lifecost = FactoryBot.build(:lifecost, child_total: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a house_total value" do
      lifecost = FactoryBot.build(:lifecost, house_total: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a car_total value" do
      lifecost = FactoryBot.build(:lifecost, car_total: nil)
      expect(lifecost).not_to be_valid
    end

    it "is not valid without a insurance_total value" do
      lifecost = FactoryBot.build(:lifecost, insurance_total: nil)
      expect(lifecost).not_to be_valid
    end

    it "is not valid without a retire_total value" do
      lifecost = FactoryBot.build(:lifecost, retire_total: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a tax value" do
      lifecost = FactoryBot.build(:lifecost, tax: nil)
      expect(lifecost).not_to be_valid
    end
    
    it "is not valid without a pension value" do
      lifecost = FactoryBot.build(:lifecost, pension: nil)
      expect(lifecost).not_to be_valid
    end

    
  end
end
