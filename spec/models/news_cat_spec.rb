require 'rails_helper'

RSpec.describe NewsCat, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      news_cat = FactoryBot.build(:news_cat)
      expect(news_cat).to be_valid
    end

    it "is not valid without a name" do
      news_cat = FactoryBot.build(:news_cat, name: nil)
      expect(news_cat).not_to be_valid
      expect(news_cat.errors[:name]).to include("can't be blank")
    end
  end
end
