class Job < ApplicationRecord
  belongs_to :organization

  validates :organization, presence: true
  validates :title, presence: true
  validates :description, presence: true
  validates :salary, presence: true
end
