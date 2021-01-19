module Api
  module V1
    class JobController < ApplicationController

      def index
        job = Job.all.order(created_at: :desc)
        render json: job, status: :ok
      end

      def show
        @job = Job.find(params[:id])
        render json: @job, status: :ok
      end

      def create
        @job = Job.new(job_params)
        if @job.save
          render json: {
          status: :created,
          jobReference: @job
        }
        else 
          render json: {
          status: 500,
          errors: @job.errors.full_messages
        }
        end
      end

      def get_by_organization_id
        @job = Job.find_by_sql("SELECT * FROM Jobs WHERE organization_id = #{params[:id]} ORDER BY id DESC")
        render json: @job, status: :ok
      end

      private

      def job_params
        params.require(:jobInfo).permit(:organization_id, :title, :description, :salary)
     end


    end
  end
end