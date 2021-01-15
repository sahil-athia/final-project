class CreateJobReferences < ActiveRecord::Migration[6.1]
  def change
    create_table :job_references do |t|
      t.belongs_to :job, null: false, foreign_key: true
      t.belongs_to :organization, null: false, foreign_key: true
      t.references :referred_by
      t.references :candidate

      t.timestamps
    end
  end
end
