class UsersController < ApplicationController
    before_action :set_user, only: %i[ show edit update destroy ]
    before_action :logged_in_user, except: [:new, :create, :confirm, :back, :success]
    before_action :guest_login_check, only: %i[ edit update destroy ]
    # GET /users or /users.json
    def index
        @users = User.all
    end

    # GET /users/1 or /users/1.json
    def show
        
    end

    # GET /users/new
    def new
        @user = User.new
    end

    # GET /users/1/edit
    def edit
        
    end

    # POST /users or /users.json
    def create
        @user = User.new(user_params)

        respond_to do |format|
            if @user.save
                Cart.create(user_id: @user.id)
                StudyRecord.create(user_id: @user.id)
                Lifecost.create(user_id: @user.id)
                UserMailer.account_activation(@user).deliver_now
                p 'USER CREATED'
                flash[:notice] = "アカウント仮登録が完了しました！以下の手続きに従って下さい。"
                @user.update(address: @user.prefecture + @user.city + @user.street, username: '@' + @user.username)
                format.html { render :success }
            else
                flash.now[:alert] = "作成に失敗しました"
            end
        end
    end

    # PATCH/PUT /users/1 or /users/1.json
    def update
        if @user.update(user_params)
            @user.update(address: @user.prefecture + @user.city + @user.street)
            flash[:notice] = "アカウントが更新されました！"
            if user_params[:photo] or user_params[:audio] or user_params[:video]
                redirect_to "/socket"
            else
                redirect_to "/users/" + params[:id] + "/edit"
            end
        else
            flash.now[:alert] = "作成に失敗しました"
        end
    end

    # DELETE /users/1 or /users/1.json
    def destroy
        @user.destroy

        respond_to do |format|
            format.html { redirect_to users_url, notice: "User was successfully destroyed." }
            format.json { head :no_content }
        end
    end

    def confirm
        if logged_in?
            render :login
        else
            @user = User.new(user_params)
            if @user.invalid?
                render :new
            end
        end
    end

    def back
        if logged_in?
            render :login
        else
            @user = User.new(user_params)
            render :new
        end
    end

    def success
        if logged_in?
            render :login
        end
    end

    private
        # Use callbacks to share common setup or constraints between actions.
        def set_user
            @user = User.find(params[:id])
        end

        # Only allow a list of trusted parameters through.
        def user_params
            params.require(:user).permit(:name, :username, :email, :password, :zip, :prefecture, :city, :street, :address, :tel, :image, :photo, :audio, :video, :profile, :introduction)
        end

        def login_check
            if logged_in?
                render :login
            end
        end
end
