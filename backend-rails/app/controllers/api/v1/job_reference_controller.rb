module Api
  module V1
    class JobReferenceController < ApplicationController

      def index
        job_references = JobReference.all.order(created_at: :desc)
        render json: job_references, status: :ok
      end

      def show
        jobReference = JobReference.find_by_sql("SELECT * FROM job_references WHERE candidate_id = #{params[:id]}")
        list = jobReference.map {|job| 
          Job.find_by_sql("SELECT * FROM jobs WHERE id = #{job.job_id}")
        }
        render json: list
      end

      def create
        @jobReference = JobReference.new(jobReference_params)
        if @jobReference.save
          render json: {
          status: :created,
          sharedJob: @jobReference
        }
        else 
          render json: {
          status: 500,
          errors: @jobReference.errors.full_messages
        }
        end
      end

      private

      def jobReference_params
        params.require(:selectedWithId).permit(:referred_by_id, :candidate_id, :job_id)
      end
      
    end
  end
end