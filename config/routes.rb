Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  scope '/api' do
    resources :users, except: [:new, :edit]
    get '/serve_image/:filename' => 'images#serve'
  end

  get '/*all', to: 'application#angular'
  root to: 'application#angular'
end
