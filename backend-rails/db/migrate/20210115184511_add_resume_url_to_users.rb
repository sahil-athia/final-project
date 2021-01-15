class AddResumeUrlToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :resume_url, :text
  end
end
