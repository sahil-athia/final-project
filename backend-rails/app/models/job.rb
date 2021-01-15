class Job < ApplicationRecord
  belongs_to :organization

  has_many :shared_jobs
  has_many :jobs_references

  validates :organization, presence: true
  validates :title, presence: true
  validates :description, presence: true
  validates :salary, presence: true
end
