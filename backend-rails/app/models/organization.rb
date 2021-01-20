class Organization < ApplicationRecord
  has_secure_password 

  has_many :jobs
  has_many :users
  has_many :jobs_references

  validates :name, presence: true
  validates :password_digest, presence: true
  validates :email, presence: true
  validates :profile_type, presence: true
  validates :email, uniqueness: true
  validates :name, length: { minimum: 1 }
end
