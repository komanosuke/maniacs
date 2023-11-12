class Cart < ApplicationRecord
    belongs_to :user, optional: true
    has_many :cart_works, dependent: :destroy
    has_many :works, through: :cart_works
end
