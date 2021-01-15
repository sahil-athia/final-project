module Api
  module V1
    class SharedJobController < ApplicationController

      def index
        shared_job = SharedJob.all.order(created_at: :desc)
        render json: {status: "SUCCESS", message: "Loaded Test Data", data: shared_job}, status: :ok
      end

      def show
      end
      
    end
  end
end