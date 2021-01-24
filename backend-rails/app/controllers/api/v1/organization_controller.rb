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

        def update
          organization = Organization.find(update_params[:id])
          organization.update(update_params)
          organization.save
        end

      private

      def organization_params
        params.require(:user).permit(:name, :password, :password_confirmation, :email, :profile_type)
      end

      def update_params
        params.require(:data).permit(:id, :name, :industry, :website, :location, :introduction, :image_url)
      end
      
    end
  end
end