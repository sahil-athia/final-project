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
      
    end
  end
end