class UserMailer < ApplicationMailer
    def send_mail(user)
        @user = user
        mail(
            from: 'toshihiko.komai616@gmail.com',
            to:   @user.email,
            subject: 'お問い合わせ通知'
        )
    end

    def account_activation(user)
        @user = user
        mail to: user.email, subject: "アカウント有効化"
    end

    def password_reset(user)
        @user = user
        mail to: user.email, subject: "パスワード再設定"
    end
end
