require 'rails_helper'

RSpec.describe ArticleCat, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      article_cat = FactoryBot.build(:article_cat)
      expect(article_cat).to be_valid
    end

    it "is not valid without a name" do
      article_cat = FactoryBot.build(:article_cat, name: nil)
      expect(article_cat).not_to be_valid
      expect(article_cat.errors[:name]).to include("can't be blank")
    end
  end
end