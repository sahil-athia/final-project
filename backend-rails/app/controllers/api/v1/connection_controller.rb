module Api
  module V1
    class ConnectionController < ApplicationController

      def index
        connection = Connection.all.order(created_at: :desc)
        render json: {status: "SUCCESS", message: "Loaded Test Data", data: connection}, status: :ok
      end

    end
  end
end