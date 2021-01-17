module Api
  module V1
    class UserController < ApplicationController
      def index
        @users = User.all
          if @users
            render json: @users
          else
            render json: {
            status: 500,
            errors: ['no users found']
          }
         end
      end

      def show
        @user = User.find(params[:id])
          if @user
            render json: @user
          else
            render json: {
            status: 500,
            errors: ['user not found']
            }
        end
      end
      
      def create
        @user = User.new(user_params)
          if @user.save
            login!  
            render json: {
            status: :created,
            user: @user
          }
          else 
            render json: {
            status: 500,
            errors: @user.errors.full_messages
          }
          end
        end

        def update_head
          @user = User.find(update_head_params[:id])
          @user.update(update_head_params)
          @user.save
        end

        def update_body
        end

        def update_footer
          @user = User.find(update_footer_params[:id])
          @user.update(update_footer_params)
          @user.save

        end
    
      private
      
      def user_params
         params.require(:user).permit(:name, :password, :password_confirmation, :email)
      end

      def update_head_params
        params.require(:data).permit(:industry, :summary, :resume_url, :id)
      end

      def update_footer_params
        params.require(:data).permit(:contact, :location, :id)
      end

    end
  end
end