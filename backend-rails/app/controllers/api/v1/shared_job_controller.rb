module Api
  module V1
    class SharedJobController < ApplicationController

      def index
        shared_job = SharedJob.all.order(created_at: :desc)
        render json: shared_job, status: :ok
      end

      def show
        jobsReferredToUser = SharedJob.find_by_sql("SELECT * FROM shared_jobs WHERE candidate_id = #{params[:id]}")
        render json: jobsReferredToUser
      end

      def create
        @sharedJob = SharedJob.new(sharedJob_params)
        if @sharedJob.save
          render json: {
          status: :created,
          sharedJob: @sharedJob
        }
        else 
          render json: {
          status: 500,
          errors: @sharedJob.errors.full_messages
        }
        end
      end

      def sharedJob_params
        params.require(:selectedWithId).permit(:referee_id, :candidate_id, :job_id)
      end
      
    end
  end
end