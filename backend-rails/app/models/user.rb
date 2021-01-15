class User < ApplicationRecord
  belongs_to :organization, optional: true
  
  has_many :sent_connections, :class_name => 'Connection', :foreign_key => 'sender_id'
  has_many :received_connections, :class_name => 'Connection', :foreign_key => 'recipient_id'

end
