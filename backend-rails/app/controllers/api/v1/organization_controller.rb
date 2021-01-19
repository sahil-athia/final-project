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

      def update_body
        @organization = Organization.find(update_body_params[:id])
        @organization.update(update_body_params)
        @organization.save
      end

      private

      def update_body_params
        params.require(:state).permit(:id, :name, :industry, :website, :email, :location, :introduction, :image_url)
      end
      
    end
  end
end