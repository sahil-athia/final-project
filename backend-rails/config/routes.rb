Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace 'api' do
    namespace 'v1' do
      resources :test
      resources :organization, only: [:index]
      resources :job, only: [:index]
      resources :user, only: [:index]
      resources :connection, only: [:index]
      resources :shared_job, only: [:index]
    end
  end
end
