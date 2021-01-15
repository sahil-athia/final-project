class JobReference < ApplicationRecord
  belongs_to :job
  belongs_to :organization
  belongs_to :referred_by, class_name: 'User'
  belongs_to :candidate, class_name: 'User'
end
