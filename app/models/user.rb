# frozen_string_literal: true

class User < ApplicationRecord
  belongs_to :organization, foreign_key: :belonged_organization_id
  has_many :tasks, foreign_key: :post_owner_id
end
