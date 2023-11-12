require 'rails_helper'

RSpec.describe Like, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      like = FactoryBot.build(:like)
      expect(like).to be_valid
    end

    it "is not valid without a user" do
      like = FactoryBot.build(:like, user: nil)
      expect(like).not_to be_valid
    end

    it "is not valid without a post" do
      like = FactoryBot.build(:like, post: nil)
      expect(like).not_to be_valid
    end
  end

  describe "associations" do
    it "belongs to a user" do
      association = described_class.reflect_on_association(:user)
      expect(association.macro).to eq(:belongs_to)
    end

    it "belongs to a post" do
      association = described_class.reflect_on_association(:post)
      expect(association.macro).to eq(:belongs_to)
    end
  end
end
