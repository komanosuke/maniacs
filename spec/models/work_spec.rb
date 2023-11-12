require 'rails_helper'

RSpec.describe Work, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      work = FactoryBot.build(:work)
      expect(work).to be_valid
    end

    it "is not valid without a work_cat" do
      work = FactoryBot.build(:work, work_cat: nil)
      expect(work).not_to be_valid
      expect(work.errors[:work_cat]).to include("must exist")
    end

    it "is not valid without a title" do
      work = FactoryBot.build(:work, title: nil)
      expect(work).not_to be_valid
      expect(work.errors[:title]).to include("can't be blank")
    end

    it "is not valid without an image" do
      work = FactoryBot.build(:work, image: nil)
      expect(work).not_to be_valid
      expect(work.errors[:image]).to include("can't be blank")
    end

    it "is not valid without a price" do
      work = FactoryBot.build(:work, price: nil)
      expect(work).not_to be_valid
      expect(work.errors[:price]).to include("can't be blank")
    end

    it "is not valid without text" do
      work = FactoryBot.build(:work, text: nil)
      expect(work).not_to be_valid
      expect(work.errors[:text]).to include("can't be blank")
    end

    it "is not valid without onlyone" do
      work = FactoryBot.build(:work, onlyone: nil)
      expect(work).not_to be_valid
      expect(work.errors[:onlyone]).to include("can't be blank")
    end

    it "is not valid without status" do
      work = FactoryBot.build(:work, status: nil)
      expect(work).not_to be_valid
      expect(work.errors[:status]).to include("can't be blank")
    end
  end
end
