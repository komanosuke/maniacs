class ArticlesController < ApplicationController
  before_action :logged_in_user, except: [:index, :show, :new, :edit, :create, :update]
  before_action :logged_in_admin, except: [:index, :show]
  before_action :set_article, only: %i[ show edit update destroy ]
  before_action :check_cart
  layout 'main'

  # GET /articles or /articles.json
  def index
    @articles = Article.all
  end

  # GET /articles/1 or /articles/1.json
  def show
    @article = Article.find(params[:id])
  end

  # GET /articles/new
  def new
    @article = Article.new
    @article_cat = ArticleCat.all

    @article_cat_id_list = []
    @article_cat.each do |ac|
      l = []
      l.push(ac.name)
      l.push(ac.id)
      @article_cat_id_list.push(l)
    end
  end

  # GET /article/1/edit
  def edit
    @article_cat_id_list = []
    @article_cats = ArticleCat.all
    @article_cats.each do |ac|
      l = []
      l.push(ac.name)
      l.push(ac.id)
      @article_cat_id_list.push(l)
    end
  end

  # POST /articles or /articles.json
  def create
    @article = Article.new(article_params)

    if @article.save
      redirect_to '/admin_view?which=article'
      flash[:notice] = "新しい商品が作成されました！"
    else
      flash.now[:alert] = "作成に失敗しました"
    end
  end

  # PATCH/PUT /articles/1 or /articles/1.json
  def update
      if @article.update(article_params)
        redirect_to "/articles/" + params[:id] + "/edit"
        flash[:notice] = "商品が更新されました！"
      else
        flash.now[:alert] = "作成に失敗しました"
      end
  end

  # DELETE /articles/1 or /articles/1.json
  def destroy
    @article.destroy

    respond_to do |format|
      format.html { redirect_to articles_url, notice: "Article was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def article_params
      params.require(:article).permit(:article_cat_id, :title, :image, :image_title, :text)
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
