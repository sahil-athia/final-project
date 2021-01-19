module Api
  module V1
    class OrganizationController < ApplicationController

      def index
        organization = Organization.all.order(created_at: :desc)
        render json: organization, status: :ok
      end

      def show
        @organization = Organization.find(params[:id])
        render json: @organization, status: :ok
      end

      def create
        @organization = Organization.new(organization_params)
          if @organization.save
            org_login!  
            render json: {
            status: :created,
            user: @organization
          }
          else 
            render json: {
            status: 500,
            errors: @organization.errors.full_messages
          }
          end
        end

      def update_body
        @organization = Organization.find(update_body_params[:id])
        @organization.update(update_body_params)
        @organization.save
      end

      private

      def organization_params
        params.require(:user).permit(:name, :password, :password_confirmation, :email, :profile_type)
      end

      def update_body_params
        params.require(:state).permit(:id, :name, :industry, :website, :email, :location, :introduction, :image_url)
      end
      
    end
  end
end