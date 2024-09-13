# frozen_string_literal: true

class AddBelongedOrganizationIdToPost < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :belonged_organization_id, :integer
  end
end
