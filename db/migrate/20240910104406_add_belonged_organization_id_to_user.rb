# frozen_string_literal: true

class AddBelongedOrganizationIdToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :belonged_organization_id, :integer
  end
end
