class CartWorksController < ApplicationController
    before_action :logged_in_user, except: [:create, :delete]
    before_action :set_cart_work, only: %i[ show edit update destroy ]
    
    # GET /cart_works or /cart_works.json
    def index
      @cart_works = CartWork.all
    end
    
    # GET /cart_works/1 or /cart_works/1.json
    def show
      @cart_work = CartWork.find(params[:id])
    end
    
    # GET /cart_works/new
    def new
      @cart_work = CartWork.new
    end
    
    # GET /cart_works/1/edit
    def edit
    end
    
    # POST /cart_works or /cart_works.json
    def create
      if logged_in?
        @cart_work = CartWork.new(cart_work_params)
      else
        @cart = Cart.find(session[:cart_id])
        @cart_work = CartWork.new(cart_work_params)
        if @cart.present?
          @cart_work.cart = @cart
        else
          @cart = Cart.create
          session[:cart_id] = @cart.id
          @cart_work.cart = @cart
        end
      end

      if @cart_work.save
        @work = Work.find(cart_work_params[:work_id])
        if @work.onlyone == 'original'
            @cart_work.update(status: 'checked')
        else
            @cart_work.update(status: 'now_on_sale')
        end
        redirect_to '/works/' + @cart_work.work_id.to_s
        flash[:notice] = "商品がカートに追加されました！"
      else
        redirect_to '/works/' + @cart_work.work_id.to_s
        flash.now[:alert] = "カートの作成に失敗しました。問題の発生が続く場合、次のメールアドレスまで問い合わせ願います。"
      end
    end

    def delete
        if logged_in?
          @cart_id = current_user.cart.id
          @cart_works = CartWork.where(cart_id: @cart_id)
          @cart_works.each do |cw|
            if cw.work_id == params[:work_id].to_i
              cw.destroy
            end
          end
        else
          if session[:cart_id]
            @cart_works = CartWork.where(cart_id: session[:cart_id])
            @cart_works.each do |cw|
              if cw.work_id == params[:work_id].to_i
                cw.destroy
              end
            end
          end
        end

        if params[:command] == 'show'
            redirect_to '/works/' + params[:work_id].to_s
            flash[:notice] = "商品が削除されました！"
        else
            redirect_to '/purchase'
            flash[:notice] = "商品が削除されました！"
        end
    end
    
    # DELETE /cart_works/1 or /cart_works/1.json
    def destroy
      @cart_work.destroy
    
      respond_to do |format|
        format.html { redirect_to cart_works_url, notice: "CartWork was successfully destroyed." }
        format.json { head :no_content }
      end
    end
    
    private
      def set_cart_work
        @cart_work = CartWork.find(params[:id])
      end
    
      def cart_work_params
        params.require(:cart_work).permit(:cart_id, :work_id, :status)
      end
end
