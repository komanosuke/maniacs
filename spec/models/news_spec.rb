require 'rails_helper'

RSpec.describe News, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      news = FactoryBot.build(:news)
      expect(news).to be_valid
    end

    it "is not valid without a news_cat" do
      news = FactoryBot.build(:news, news_cat: nil)
      expect(news).not_to be_valid
      expect(news.errors[:news_cat]).to include("must exist")
    end

    it "is not valid without a title" do
      news = FactoryBot.build(:news, title: nil)
      expect(news).not_to be_valid
      expect(news.errors[:title]).to include("can't be blank")
    end

    it "is not valid without an image" do
      news = FactoryBot.build(:news, image: nil)
      expect(news).not_to be_valid
      expect(news.errors[:image]).to include("can't be blank")
    end

    it "is not valid without an image_title" do
      news = FactoryBot.build(:news, image_title: nil)
      expect(news).not_to be_valid
      expect(news.errors[:image_title]).to include("can't be blank")
    end

    it "is not valid without text" do
      news = FactoryBot.build(:news, text: nil)
      expect(news).not_to be_valid
      expect(news.errors[:text]).to include("can't be blank")
    end
  end
end
