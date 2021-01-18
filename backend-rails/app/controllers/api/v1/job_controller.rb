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

      def get_by_organization_id
        @job = Job.find_by_sql("SELECT * FROM Jobs WHERE organization_id = #{params[:id]}")
        render json: @job, status: :ok
      end
    end
  end
end