# frozen_string_literal: true

class RenameForeignKeyColumnInPost < ActiveRecord::Migration[7.0]
  def change
    rename_column :posts, :post_owner, :post_owner_id

    remove_foreign_key :posts, :users

    add_foreign_key :posts, :users, column: :post_owner_id
  end
end
