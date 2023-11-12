class MainController < ApplicationController
  before_action :logged_in_user, except: [:top, :index, :purchase, :thanks, :concept, :contact, :help, :login, :terms, :policy, :admin, :admin_view, :delete]
  before_action :logged_in_admin, except: [:top, :index, :purchase, :thanks, :concept, :contact, :help, :login, :terms, :policy]
  before_action :check_cart
  layout 'main'

  def index
    @works = Work.first(8)
    @articles = Article.first(8)
    @news = News.first(8)
  end

  def purchase
    if logged_in?
      @cart = current_user.cart
    else
      @cart = Cart.find(session[:cart_id])
    end
    @cart_works = CartWork.where(cart_id: @cart.id)
    @works = []
    @total_price = 0
    @cart_works.each do |cw|
      @works.push(Work.find(cw.work_id))
      @total_price += Work.find(cw.work_id).price
    end
  end

  def thanks
    if logged_in?
      @cart = current_user.cart
      @cart_works = CartWork.where(cart_id: @cart.id)
      @cart_works.each do |cw|
        cw.destroy
      end
    else
      @cart = Cart.find(session[:cart_id])
      @cart.destroy
    end  
  end

  def admin_view
    @view = params[:which]
    case @view
    when 'user'
      @users = User.all
    when 'work'
      @works = Work.all
      work_cats = WorkCat.all
      @work_cat_hash = {}
      work_cats.each do |c|
        @work_cat_hash[c.id] = c.name
      end
    when 'work_cat'
      @work_cats = WorkCat.all
    when 'article'
      @articles = Article.all
      article_cats = ArticleCat.all
      @article_cat_hash = {}
      article_cats.each do |c|
        @article_cat_hash[c.id] = c.name
      end
    when 'article_cat'
      @article_cats = ArticleCat.all
    when 'news'
      @news = News.all
      news_cats = NewsCat.all
      @news_cat_hash = {}
      news_cats.each do |c|
        @news_cat_hash[c.id] = c.name
      end
    when 'news_cat'
      @news_cats = NewsCat.all
    end
  end

  def delete
    view = params[:which]
    case view
    when 'work'
      data = Work.all
      which = 'work'
    when 'work_cat'
      data = WorkCat.all
      which = 'work_cat'
    when 'article'
      data = Article.all
      which = 'article'
    when 'article_cat'
      data = ArticleCat.all
      which = 'article_cat'
    when 'news'
      data = News.all
      which = 'news'
    when 'news_cat'
      data = NewsCat.all
      which = 'news_cat'
    end
    if params[:delete_list]
      data_list = params[:delete_list].split(',')
      data.each_with_index do |d, i|
        if data_list.include?(i.to_s)
          d.destroy
        end
      end
      redirect_to '/admin_view?which=' + which
      flash[:notice] = 'データが削除されました！'
    else
      redirect_to '/admin_view?which=' + which
      flash[:notice] = 'データ指定がないため削除されませんでした'
    end
  end

  private
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
