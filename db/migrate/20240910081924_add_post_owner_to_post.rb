# frozen_string_literal: true

class AddPostOwnerToPost < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :post_owner, :integer
  end
end
