class AddTypeToOrganization < ActiveRecord::Migration[6.1]
  def change
    add_column :organizations, :profile_type, :string
  end
end
