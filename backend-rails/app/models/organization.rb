class Organization < ApplicationRecord
  has_secure_password 

  has_many :jobs
  has_many :users
  has_many :jobs_references

  validates :name, presence: true
  validates :password, presence: true
  validates :email, presence: true
  validates :name, uniqueness: true
  validates :name, length: { minimum: 1 }
end
