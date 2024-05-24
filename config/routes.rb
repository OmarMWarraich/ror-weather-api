Rails.application.routes.draw do
  # Namespace for API versioning
  namespace :api do
    namespace :v1 do
      # Devise JWT authentication routes with custom paths
      devise_for :users, path: '', path_names: {
        sign_in: 'login',
        sign_out: 'logout',
        registration: 'signup'
      },
      controllers: {
        sessions: 'api/v1/users/sessions',
        registrations: 'api/v1/users/registrations'
      }

      # Weather API routes
      resources :locations do
        resources :recordings
      end
    end
  end

  # Health check route
  get "up" => "rails/health#show", as: :rails_health_check

  # Root path route (optional, can be customized as needed)
end
