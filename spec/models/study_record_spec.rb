require 'rails_helper'

RSpec.describe StudyRecord, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      study_record = FactoryBot.build(:study_record)
      expect(study_record).to be_valid
    end

    it "is not valid without a user" do
      study_record = FactoryBot.build(:study_record, user: nil)
      expect(study_record).not_to be_valid
      expect(study_record.errors[:user]).to include("must exist")
    end

    it "is not valid without grade1" do
      study_record = FactoryBot.build(:study_record, grade1: nil)
      expect(study_record).not_to be_valid
      expect(study_record.errors[:grade1]).to include("can't be blank")
    end

    it "is not valid without grade2" do
      study_record = FactoryBot.build(:study_record, grade2: nil)
      expect(study_record).not_to be_valid
      expect(study_record.errors[:grade2]).to include("can't be blank")
    end

    it "is not valid without grade3" do
      study_record = FactoryBot.build(:study_record, grade3: nil)
      expect(study_record).not_to be_valid
      expect(study_record.errors[:grade3]).to include("can't be blank")
    end

    it "is not valid without grade4" do
      study_record = FactoryBot.build(:study_record, grade4: nil)
      expect(study_record).not_to be_valid
      expect(study_record.errors[:grade4]).to include("can't be blank")
    end

    it "is not valid without grade5" do
      study_record = FactoryBot.build(:study_record, grade5: nil)
      expect(study_record).not_to be_valid
      expect(study_record.errors[:grade5]).to include("can't be blank")
    end

    it "is not valid without grade6" do
      study_record = FactoryBot.build(:study_record, grade6: nil)
      expect(study_record).not_to be_valid
      expect(study_record.errors[:grade6]).to include("can't be blank")
    end
  end
end
