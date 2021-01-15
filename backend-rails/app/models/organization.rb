class Organization < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true
  validates :introduction, presence: true
  validates :industry, presence: true
  validates :website, presence: true
  validates :location, presence: true
end
