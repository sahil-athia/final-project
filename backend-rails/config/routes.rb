Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace 'api' do
    namespace 'v1' do
      resources :test
      resources :organization
      resources :job
      resources :user
      resources :connection
      resources :shared_job
      resources :job_reference
    end
  end
end
