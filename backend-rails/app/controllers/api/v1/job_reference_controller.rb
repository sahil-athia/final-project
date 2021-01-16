module Api
  module V1
    class JobReferenceController < ApplicationController

      def index
        job_references = JobReference.all.order(created_at: :desc)
        render json: job_references, status: :ok
      end

      def show
      end
      
    end
  end
end