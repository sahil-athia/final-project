class CreateSharedJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :shared_jobs do |t|
      t.belongs_to :job, null: false, foreign_key: true
      t.references :referee
      t.references :candidate

      t.timestamps
    end
  end
end
