module Api
  module V1
    class TestController < ApplicationController

      def index
        test = Test.all.order(created_at: :desc)
        render json: test, status: :ok
      end

      def show
      end
      
    end
  end
end