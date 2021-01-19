class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  helper_method :login!, :logged_in?, :current_user, :org_logout!, :authorized_user?, :logout!, :set_user, :org_login!
      
  def login!
        session[:user_id] = @user.id
  end

  def org_login!
      session[:organization_id] = @organization.id
  end

  def logged_in?
        !!session[:user_id] || !!session[:organization_id]
  end

  def current_user
      if session[:user_id]
        @current_user ||= User.find(session[:user_id]) if session[:user_id] 
      else 
        @current_user ||= Organization.find(session[:organization_id]) if session[:organization_id] 
      end
  end

  def authorized_user?
         @user == current_user
  end

  def logout!
      session.delete(:user_id)
  end

  def org_logout!
      session.delete(:organization_id) 
  end

  def set_user
      @user = User.find_by(id: session[:user_id]) || @organization = Organization.find_by(id: session[:organization_id])
  end
end
