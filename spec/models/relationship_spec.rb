require 'rails_helper'

RSpec.describe Relationship, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      relationship = FactoryBot.build(:relationship)
      expect(relationship).to be_valid
    end

    it "is not valid without a follower" do
      relationship = FactoryBot.build(:relationship, follower: nil)
      expect(relationship).not_to be_valid
      expect(relationship.errors[:follower]).to include("must exist")
    end

    it "is not valid without a followed user" do
      relationship = FactoryBot.build(:relationship, followed: nil)
      expect(relationship).not_to be_valid
      expect(relationship.errors[:followed]).to include("must exist")
    end
  end
end
