class CreateConnections < ActiveRecord::Migration[6.1]
  def change
    create_table :connections do |t|
      t.references :sender
      t.references :recipient

      t.timestamps
    end
  end
end
