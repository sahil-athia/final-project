class SessionsController < ApplicationController
  
  def create
    if (session_params[:profile_type] == "user")
      @user = User.find_by(name: session_params[:name], email: session_params[:email])
    
      if @user && @user.authenticate(session_params[:password])
        login!
        render json: {
          logged_in: true,
          user: @user
        }
      else
        render json: { 
          status: 401,
          errors: ['no such user, please try again']
        }
      end

    elsif (session_params[:profile_type] == "organization")

      @organization = Organization.find_by(name: session_params[:name], email: session_params[:email])
    
      if @organization && @organization.authenticate(session_params[:password])
        org_login!
        render json: {
          logged_in: true,
          user: @organization
        }
      else
        render json: { 
          status: 401,
          errors: ['no such organization, please try again']
        }
      end
    end
  end

  def is_logged_in?
      if logged_in? && current_user
        render json: {
          logged_in: true,
          user: current_user
        }
      else
        render json: {
          logged_in: false,
          message: 'no such user'
        }
      end
  end

  def destroy
        logout!
        render json: {
          status: 200,
          logged_out: true
        }
  end
  private
    def session_params
          params.require(:user).permit(:name, :password, :email, :profile_type)
    end
end