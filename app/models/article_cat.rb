class ArticleCat < ApplicationRecord
    has_many :articles
    validates :name, presence: true
end
