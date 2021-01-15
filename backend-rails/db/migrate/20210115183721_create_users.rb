class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
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
