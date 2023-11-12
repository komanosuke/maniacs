Rails.application.routes.draw do
  root to: 'main#index'

  get '/', to: 'main#index'
  get 'index', to: 'main#index'

  get '/admin_login', to: 'admin_sessions#new'
  post '/admin_login', to: 'admin_sessions#create'
  delete '/admin_logout', to: 'admin_sessions#destroy'

  get 'home/terms', to: 'home#terms'
  get 'home/policy', to: 'home#policy'

  resources :users do
    resource :relationships, only: [:create, :destroy]
    get :follows, on: :member
    get :followers, on: :member
  end
  get 'users/confirm', to: 'users#confirm'
  post 'users/confirm', to: 'users#confirm'
  get 'users/back', to: 'users#back'
  post 'users/back', to: 'users#back'
  get 'signup_done', to: 'users#signup_done'
  get 'success', to: 'users#success'
  resources :account_activations, only: [:edit]
  resources :password_resets, only: [:new, :create, :edit, :update]
  get 'password_resets/mail_done'
  get 'password_resets/success'

  resources :works
  resources :work_cats
  resources :articles
  resources :article_cats
  resources :news
  resources :news_cats
  resources :cart_works
  post 'cart_works/delete', to: 'cart_works#delete'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get 'admin', to: 'main#admin'
  get 'admin_view', to: 'main#admin_view'
  post 'delete', to: 'main#delete'
  get 'concept', to: 'main#concept'
  get 'purchase', to: 'main#purchase'
  get 'thanks', to: 'main#thanks'
  get 'help', to: 'main#help'
  get 'terms', to: 'main#terms'
  get 'policy', to: 'main#policy'

  get 'doraemon', to: 'doraemon#doraemon'
  post 'doraemon', to: 'doraemon#doraemon'

  get 'contact', to: 'contacts#new'
  resources :contacts, only: [:create]
  post 'contacts/confirm', to: 'contacts#confirm', as: 'confirm'
  post 'contacts/back', to: 'contacts#back', as: 'back'
  get 'contacts/done', to: 'contacts#done', as: 'done'

end
