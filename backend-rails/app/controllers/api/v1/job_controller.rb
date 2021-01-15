module Api
  module V1
    class JobController < ApplicationController

      def index
        job = Job.all.order(created_at: :desc)
        render json: {status: "SUCCESS", message: "Loaded Test Data", data: job}, status: :ok
      end

      def show
      end
    end
  end
end