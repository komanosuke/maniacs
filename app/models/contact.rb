class Contact < ApplicationRecord
    enum subject: {
        'キャンセルについて' => 0,
        '新商品について' => 1,
        'サービスについて' => 2
    }
    validates :name, presence: true
    validates :email, presence: true
    validates :phone_number, presence: true
    validates :subject, presence: true
    validates :message, presence: true
end