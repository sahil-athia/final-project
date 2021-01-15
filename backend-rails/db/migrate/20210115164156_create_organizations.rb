class CreateOrganizations < ActiveRecord::Migration[6.1]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :email
      t.text :introduction
      t.string :industry
      t.text :website
      t.text :location
      t.text :image_url

      t.timestamps
    end
  end
end
