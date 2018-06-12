Rails.application.routes.draw do
  resources :static_pages
  resources :users

  get 'home/home', to: 'application#index'
  get 'lobby/lobby', to: 'application#index'
  get 'users/new', to: 'application#index'

  root 'application#index'
end
