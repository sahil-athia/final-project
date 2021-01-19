class User < ApplicationRecord
  has_secure_password
  validates :name, presence: true
  validates :password, presence: true
  validates :email, presence: true
  validates :name, uniqueness: true
  validates :name, length: { minimum: 1 }

  belongs_to :organization, optional: true
  
  has_many :sent_connections, :class_name => 'Connection', :foreign_key => 'sender_id'
  has_many :received_connections, :class_name => 'Connection', :foreign_key => 'recipient_id'

  has_many :sent_postings, :class_name => 'SharedJob', :foreign_key => 'referee_id'
  has_many :received_postings, :class_name => 'SharedJob', :foreign_key => 'candidate_id'

  has_many :sent_references, :class_name => 'JobReference', :foreign_key => 'referred_by_id'
  has_many :received_references, :class_name => 'JobReference', :foreign_key => 'candidate_id'

end
