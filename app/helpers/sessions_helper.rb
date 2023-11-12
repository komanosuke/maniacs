module SessionsHelper
    def log_in(user)
        session[:user_id] = user.id
    end

    # 現在ログイン中のユーザーを返す (いる場合)
    def current_user
        if (user_id = session[:user_id])
            @current_user ||= User.find_by(id: user_id)
        elsif (user_id = cookies.encrypted[:user_id])
            user = User.find_by(id: user_id)
            if user && user.authenticated?(cookies[:remember_token])
                log_in user
                @current_user = user
            end
        end
    end

    def current_user?(user)
        user == current_user
    end

    def logged_in?
        !current_user.nil?
    end

    # 永続的セッションを破棄する
    def forget(user)
        user.forget
        cookies.delete(:user_id)
        cookies.delete(:remember_token)
    end

    # ログアウトする（セッション情報を削除する）
    def log_out
        # ログアウト時に current_user の永続的セッションも破棄する
        forget(current_user)
        session.delete(:user_id)
        @current_user = nil
    end
end
