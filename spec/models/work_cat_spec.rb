require 'rails_helper'

RSpec.describe WorkCat, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      work_cat = FactoryBot.build(:work_cat)
      expect(work_cat).to be_valid
    end

    it "is not valid without a name" do
      work_cat = FactoryBot.build(:work_cat, name: nil)
      expect(work_cat).not_to be_valid
      expect(work_cat.errors[:name]).to include("can't be blank")
    end
  end
end
