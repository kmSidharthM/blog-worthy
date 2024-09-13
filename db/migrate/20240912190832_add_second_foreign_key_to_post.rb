# frozen_string_literal: true

class AddSecondForeignKeyToPost < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :posts, :organizations, column: :belonged_organization_id
  end
end
