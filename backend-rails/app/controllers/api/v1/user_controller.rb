module Api
  module V1
    class UserController < ApplicationController

      def index
        user = User.all.order(created_at: :desc)
        render json: user, status: :ok
      end

      def show
        @user = User.find(params[:id])
        render json: @user, status: :ok
      end
      
    end
  end
end