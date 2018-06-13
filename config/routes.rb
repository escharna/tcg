Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  scope '/api' do
    resources :users, except: [:new, :edit]
  end

  get '/home', to: 'application#angular'
  root to: 'application#angular'

  # post 'auth/login', to: 'authentication#authenticate'
end
