# frozen_string_literal: true

Rails.application.routes.draw do
  defaults format: :json do
    resources :posts, only: %i[index create show], param: :slug
    resources :users, only: %i[show, create], param: :id
  end

  root "home#index"
  get "*path", to: "home#index", via: :all
end
