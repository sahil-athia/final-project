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
          jobReference: @jobReference
        }
        else 
          render json: {
          status: 500,
          errors: @jobReference.errors.full_messages
        }
        end
      end

      def get_by_job_id
        job_references = JobReference.where(job_id: params[:id], accepted: true)
        filteredList = job_references.map {|reference| 
        candidateId = reference.candidate_id
        refereeId = reference.referred_by_id
        { "candidate" => User.where(id: candidateId), "referee" => User.where(id: refereeId)}
        }
        render json: filteredList, status: :ok
      end

      def accept_reference
        reference = JobReference.where(job_id: params[:job_id], organization_id: params[:organization_id])
        reference.update(accepted: true)
      end

      private

      def jobReference_params
        params.require(:selectedWithId).permit(:referred_by_id, :candidate_id, :job_id)
      end

      def accept_reference_params
        params.require(:jobInfo).permit(:job_id, :organization_id, :accepted)
      end
      
    end
  end
end