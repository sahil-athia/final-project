class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.belongs_to :organization, null: false, foreign_key: true
      t.string :name
      t.string :email
      t.text :summary
      t.string :industry
      t.text :skills
      t.text :education
      t.text :experience
      t.text :location
      t.text :contact

      t.timestamps
    end
  end
end
