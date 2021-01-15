module Api
  module V1
    class UserController < ApplicationController

      def index
        user = User.all.order(created_at: :desc)
        render json: {status: "SUCCESS", message: "Loaded Test Data", data: user}, status: :ok
      end

    end
  end
end