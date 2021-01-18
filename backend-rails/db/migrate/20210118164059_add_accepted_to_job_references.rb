class AddAcceptedToJobReferences < ActiveRecord::Migration[6.1]
  def change
    add_column :job_references, :accepted, :boolean
  end
end
