class Job < ApplicationRecord
  belongs_to :organization

  has_many :shared_jobs, dependent: :delete_all
  has_many :job_references, dependent: :delete_all

  validates :organization, presence: true
  validates :title, presence: true
  validates :description, presence: true
  validates :salary, presence: true
end
