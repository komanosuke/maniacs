class WorksController < ApplicationController
  before_action :logged_in_user, except: [:index, :show, :new, :edit, :create, :update]
  before_action :logged_in_admin, except: [:index, :show]
  before_action :set_work, only: %i[ show edit update destroy ]
  before_action :check_cart
  layout 'main'

  # GET /works or /works.json
  def index
    @works = Work.all
  end

  # GET /works/1 or /works/1.json
  def show
    @work = Work.find(params[:id])
    @works = Work.all
    @cart_work = CartWork.new
    @cart_work_check = CartWork.find_by(work_id: params[:id])
    if logged_in?
      @cart_works = CartWork.where(cart_id: current_user.cart.id)
      @cart = current_user.cart
      @cart_works_view = @cart.cart_works
      @works_view = @cart_works_view.map(&:work) # CartWorkに紐づくWorkを取得
    else
      if session[:cart_id].nil?
        @cart = Cart.create
        session[:cart_id] = @cart.id
      else
        begin
          @cart = Cart.find(session[:cart_id])
        rescue => exception
          p 'セッションIDで何らかのエラー!新しいセッションIDでカートを再作成します'
          @cart = Cart.create
          session[:cart_id] = @cart.id
        end
      end
      @cart_works = CartWork.where(cart_id: session[:cart_id])
      @cart_works_view = @cart.cart_works
      @works_view = @cart_works_view.map(&:work)
    end
    @total_price = @works_view.sum(&:price) # 合計金額の計算
  end

  # GET /works/new
  def new
    @work = Work.new
    @work_cat = WorkCat.all

    @work_cat_id_list = []
    @work_cat.each do |wc|
      l = []
      l.push(wc.name)
      l.push(wc.id)
      @work_cat_id_list.push(l)
    end
  end

  # GET /works/1/edit
  def edit
    @work_cat_id_list = []
    @work_cats = WorkCat.all
    @work_cats.each do |wc|
      l = []
      l.push(wc.name)
      l.push(wc.id)
      @work_cat_id_list.push(l)
    end
  end

  # POST /works or /works.json
  def create
    @work = Work.new(work_params)

    # respond_to do |format|
      if @work.save
        redirect_to '/admin_view?which=work'
        flash[:notice] = "新しい商品が作成されました！"
        # format.html { redirect_to work_url(@work), notice: "Work was successfully created." }
        # format.json { render :show, status: :created, location: @work }
      else
        flash.now[:alert] = "作成に失敗しました"
        # format.html { render :new, status: :unprocessable_entity }
        # format.json { render json: @work.errors, status: :unprocessable_entity }
      end
    # end
  end

  # PATCH/PUT /works/1 or /works/1.json
  def update
    if @work.update(work_params)
      redirect_to "/works/" + params[:id] + "/edit"
      flash[:notice] = "商品が更新されました！"
    else
      flash.now[:alert] = "作成に失敗しました"
    end
  end

  # DELETE /works/1 or /works/1.json
  def destroy
    @work.destroy

    respond_to do |format|
      format.html { redirect_to works_url, notice: "Work was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_work
      @work = Work.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def work_params
      params.require(:work).permit(:work_cat_id, :title, :image, :price, :text, :onlyone, :status)
    end

    def check_cart
      if logged_in?
        @cart = current_user.cart
      else
        if !(Cart.find_by(id: session[:cart_id]).present?)
          @cart = Cart.create
          session[:cart_id] = @cart.id
        end
      end
    end
end