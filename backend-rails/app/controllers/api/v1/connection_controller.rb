module Api
  module V1
    class ConnectionController < ApplicationController

      def index
        connection = Connection.all.order(created_at: :desc)
        render json: connection, status: :ok
      end

      def show
        
      end

    end
  end
end