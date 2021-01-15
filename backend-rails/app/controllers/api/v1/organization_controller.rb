module Api
  module V1
    class OrganizationController < ApplicationController

      def index
        organization = Organization.all.order(created_at: :desc)
        render json: {status: "SUCCESS", message: "Loaded Test Data", data: organization}, status: :ok
      end

      def show
      end
      
    end
  end
end