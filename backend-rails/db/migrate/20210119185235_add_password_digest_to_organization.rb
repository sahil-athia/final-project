class AddPasswordDigestToOrganization < ActiveRecord::Migration[6.1]
  def change
    add_column :organizations, :password_digest, :string
  end
end
