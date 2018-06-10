Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :static_pages
  resources :users

  get 'home/home', to: 'application#index'
  get 'lobby/lobby', to: 'application#index'
  get 'users/new', to: 'application#index'

  root 'application#index'
end
