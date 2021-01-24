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
  
  get 'api/v1/user/show_networks/:id', to: 'api/v1/user#show_networks'
  get 'api/v1/user/by_organization_id/:id', to: 'api/v1/user#get_by_organization_id'
  get 'api/v1/user/search_new/:id', to: 'api/v1/user#search_new'

  get 'api/v1/job/by_organization_id/:id', to: 'api/v1/job#get_by_organization_id'
  get 'api/v1/job_reference/by_job_id/:id', to: 'api/v1/job_reference#get_by_job_id'
  get 'api/v1/job_reference/by_user_id/:id', to: 'api/v1/job_reference#get_by_user_id'
  post 'api/v1/user/update_head/', to: 'api/v1/user#update_head'
  post 'api/v1/user/update_body/', to: 'api/v1/user#update_body'
  post 'api/v1/user/update_footer/', to: 'api/v1/user#update_footer'

  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
end
