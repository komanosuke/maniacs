# spec/models/article_spec.rb

require 'rails_helper'

RSpec.describe Article, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      article = FactoryBot.build(:article)
      expect(article).to be_valid
    end

    it "is not valid without a title" do
      article = FactoryBot.build(:article, title: nil)
      expect(article).not_to be_valid
      expect(article.errors[:title]).to include("can't be blank")
    end

    it "is not valid without a image_title" do
      article = FactoryBot.build(:article, image_title: nil)
      expect(article).not_to be_valid
      expect(article.errors[:image_title]).to include("can't be blank")
    end

    it "is not valid without a text" do
      article = FactoryBot.build(:article, text: nil)
      expect(article).not_to be_valid
      expect(article.errors[:text]).to include("can't be blank")
    end

    it "is not valid without an image" do
      article = FactoryBot.build(:article)
      article.image = nil

      expect(article).not_to be_valid
      expect(article.errors[:image]).to include("can't be blank")
    end

    it "is valid with a valid image" do
      article = FactoryBot.build(:article)
      article.image = Rack::Test::UploadedFile.new(Rails.root.join('spec', 'fixtures', 'noimage.jpg'), 'image/jpeg')

      expect(article).to be_valid
    end
  end

  describe "associations" do
    it "belongs to an article category" do
      article_cat = FactoryBot.create(:article_cat)
      article = FactoryBot.create(:article, article_cat: article_cat)
      expect(article.article_cat).to eq(article_cat)
    end
  end
end