class RemoveOrganizationFromUser < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :organization_id, :integer
  end
end
