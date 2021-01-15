module Api
  module V1
    class JobReferenceController < ApplicationController

      def index
        job_references = JobReference.all.order(created_at: :desc)
        render json: {status: "SUCCESS", message: "Loaded Test Data", data: job_references}, status: :ok
      end

      def show
      end
      
    end
  end
end