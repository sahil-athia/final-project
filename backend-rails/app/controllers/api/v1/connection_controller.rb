module Api
  module V1
    class ConnectionController < ApplicationController

      def index
        connection = Connection.all.order(created_at: :desc)
        render json: connection, status: :ok
      end

      def show
        connection = Connection.find_by_sql("SELECT recipient_id FROM Connections WHERE sender_id = #{params[:id]}")
        list = connection.map {|id| 
          friend = User.find_by_sql("SELECT * FROM Users WHERE id = #{id.recipient_id}")
        }
        render json: list
      end

      def create
        @connection = Connection.new(connection_params)
        @connection.save
      end

      private
      def connection_params
        params.require(:data).permit(:recipient_id, :sender_id)
     end
    end
  end
end