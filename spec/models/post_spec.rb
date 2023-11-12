require 'rails_helper'

RSpec.describe Post, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      post = FactoryBot.build(:post)
      expect(post).to be_valid
    end

    it "is not valid without a user" do
      post = FactoryBot.build(:post, user: nil)
      expect(post).not_to be_valid
      expect(post.errors[:user]).to include("must exist")
    end

    it "is not valid without content" do
      post = FactoryBot.build(:post, content: nil)
      expect(post).not_to be_valid
      expect(post.errors[:content]).to include("can't be blank")
    end
  end
end
