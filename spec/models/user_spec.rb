require 'rails_helper'

RSpec.describe User, type: :model do
  
  describe "validations" do
    it { should validate_presence_of(:password) }
    it { should validate_length_of(:password).is_at_least(8) }
    it { should validate_length_of(:password).is_at_most(20) }
    it { should validate_presence_of(:email) }
    it { should validate_length_of(:email).is_at_most(255) }
    it "validates the uniqueness of email" do
      FactoryBot.create(:user, email: "existing@example.com")
      user = FactoryBot.build(:user, email: "existing@example.com")
      expect(user).not_to be_valid
    end
    it { should validate_presence_of(:name) }
    it { should validate_length_of(:name).is_at_most(50) }
    it { should validate_presence_of(:username) }
    it "validates the uniqueness of username (case-insensitive)" do
      FactoryBot.create(:user, username: "@johndoe")
      user = FactoryBot.build(:user, username: "@JOHNDOE")
      expect(user).not_to be_valid
    end
    it { should validate_length_of(:username).is_at_most(50) }
  end
      
  describe "associations" do
    it { should have_many(:posts).dependent(:destroy) }
    it { should have_many(:likes).dependent(:destroy) }
    it { should have_many(:like_posts).through(:likes).source(:post) }
    it { should have_many(:comments).dependent(:destroy) }
    it { should have_many(:comment_posts).through(:comments).source(:post) }
    it { should have_many(:active_relationships).class_name("Relationship").with_foreign_key(:followed_id).dependent(:destroy) }
    it { should have_many(:followeds).through(:active_relationships).source(:follower) }
    it { should have_many(:passive_relationships).class_name("Relationship").with_foreign_key(:follower_id).dependent(:destroy) }
    it { should have_many(:followers).through(:passive_relationships).source(:followed) }
    it { should have_one(:cart).dependent(:destroy) }
    it { should have_one(:lifecost).dependent(:destroy) }
    it { should have_one(:study_record) }
  end
      
  describe "methods" do
    let(:user) { FactoryBot.create(:user) }
    let(:another_user) { FactoryBot.create(:user, email: "another@example.com", username: "another_username") }
    let(:unfollower_user) { FactoryBot.create(:user, email: "unfollower@example.com", username: "unfollower_username") }

    before do
      FactoryBot.create(:relationship, follower_id: another_user.id, followed_id: user.id)
    end

    it "returns true if the user is followed by another user" do
      expect(user.followed_by?(another_user)).to eq(true)
    end

    it "returns false if the user is not followed by another user" do
      expect(user.followed_by?(unfollower_user)).to eq(false)
    end
  end
end