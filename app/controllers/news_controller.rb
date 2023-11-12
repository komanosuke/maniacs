class NewsController < ApplicationController
  before_action :logged_in_user, except: [:index, :show, :new, :edit, :create, :update]
  before_action :logged_in_admin, except: [:index, :show]
  before_action :set_news, only: %i[ show edit update destroy ]
  before_action :check_cart
  layout 'main'

  # GET /news or /news.json
  def index
    @news = News.all
  end

  # GET /news/1 or /news/1.json
  def show
    @news = News.find(params[:id])
  end

  # GET /news/new
  def new
    @news = News.new
    @news_cat = NewsCat.all

    @news_cat_id_list = []
    @news_cat.each do |nc|
      l = []
      l.push(nc.name)
      l.push(nc.id)
      @news_cat_id_list.push(l)
    end
  end

  # GET /news/1/edit
  def edit
    @news_cat_id_list = []
    @news_cats = NewsCat.all
    @news_cats.each do |nc|
      l = []
      l.push(nc.name)
      l.push(nc.id)
      @news_cat_id_list.push(l)
    end
  end

  # POST /news or /news.json
  def create
    @news = News.new(news_params)
    if @news.save
      redirect_to '/admin_view?which=news'
      flash[:notice] = "新しい４コマが作成されました！"
    else
      flash.now[:alert] = "作成に失敗しました"
    end
  end

  # PATCH/PUT /news/1 or /news/1.json
  def update
    if @news.update(news_params)
      redirect_to "/news/" + params[:id] + "/edit"
      flash[:notice] = "４コマが更新されました！"
    else
      flash.now[:alert] = "作成に失敗しました"
    end
  end

  # DELETE /news/1 or /news/1.json
  def destroy
    @news.destroy

    respond_to do |format|
      format.html { redirect_to news_url, notice: "News was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_news
      @news = News.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def news_params
      params.require(:news).permit(:news_cat_id, :title, :image, :image_title, :text)
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
