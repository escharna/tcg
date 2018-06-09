Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :static_pages

  get 'home/home', to: 'application#index'

  root 'application#index'
end
