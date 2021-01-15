class User < ApplicationRecord
  belongs_to :organization, optional: true
  
  has_many :sent_connections, :class_name => 'Connection', :foreign_key => 'sender_id'
  has_many :received_connections, :class_name => 'Connection', :foreign_key => 'recipient_id'

  has_many :sent_postings, :class_name => 'SharedJob', :foreign_key => 'referee_id'
  has_many :received_postings, :class_name => 'SharedJob', :foreign_key => 'candidate_id'

end
