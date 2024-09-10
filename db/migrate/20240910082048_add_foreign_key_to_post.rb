# frozen_string_literal: true

class AddForeignKeyToPost < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :posts, :users, column: :post_owner
  end
end
