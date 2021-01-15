module Api
  module V1
    class TestController < ApplicationController

      def index
        test = Test.all.order(created_at: :desc)
        render json: {status: "SUCCESS", message: "Loaded Test Data", data: test}, status: :ok
      end

    end
  end
end