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
  get 'api/v1/job/by_organization_id/:id', to: 'api/v1/job#get_by_organization_id'
  post 'api/v1/job_reference/job/', to: 'api/v1/job_reference#accept_reference'
  post 'api/v1/user/update_head/', to: 'api/v1/user#update_head'
  post 'api/v1/user/update_body/', to: 'api/v1/user#update_body'
  post 'api/v1/user/update_footer/', to: 'api/v1/user#update_footer'
  post 'api/v1/organization/update_body/', to: 'api/v1/organization#update_body'

  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
end
