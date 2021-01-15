class SharedJob < ApplicationRecord
  belongs_to :job
  belongs_to :referee, class_name: 'User'
  belongs_to :candidate, class_name: 'User'

end
