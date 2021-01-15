class Organization < ApplicationRecord
  has_many :jobs
  has_many :users
  has_many :jobs_references

  validates :name, presence: true
  validates :email, presence: true
  validates :introduction, presence: true
  validates :industry, presence: true
  validates :website, presence: true
  validates :location, presence: true
end
