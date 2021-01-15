class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.belongs_to :organization, null: false, foreign_key: true
      t.string :title
      t.text :description
      t.string :salary

      t.timestamps
    end
  end
end
