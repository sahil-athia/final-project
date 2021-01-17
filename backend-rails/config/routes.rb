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

  post 'api/v1/user/update_head/', to: 'api/v1/user#update_head'
  post 'api/v1/user/update_body/', to: 'api/v1/user#update_body'
  post 'api/v1/user/update_footer/', to: 'api/v1/user#update_footer'

  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
end
