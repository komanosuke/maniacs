class SessionsController < ApplicationController

    def new
        
    end

    def create
        user = User.find_by(email: params[:session][:email].downcase)

        if user && user.authenticate(params[:session][:password])
            if user.activated?
                log_in(user)
                params[:session][:remember_me] == "1" ? remember(user) : forget(user)
                if Cart.find_by(id: session[:cart_id]).present?
                    cart_works = CartWork.where(cart_id: session[:cart_id])
                    cart_works.each do |cw|
                        CartWork.create(cart_id: user.cart.id, work_id: cw.work_id )
                    end
                end
                flash[:success] = user.email + " でのログインに成功しました"
                redirect_to root_url
            else
                flash[:warning] = "アカウントが有効化されていません。届いたメールをご確認の上、アカウントを有効化してください。"
                redirect_to root_url
            end
        else
            flash.now[:alert] = "メールアドレスまたはパスワードが正しくありません。"
            render "new", status: :unprocessable_entity
        end
    end


    def destroy
        # ログイン中のみログアウトする
        if logged_in?
            cart = Cart.find_by(id: session[:cart_id])
            if cart.present?
                cart.destroy
            end

            log_out
        end
        redirect_to root_path, status: :see_other
    end
end