# frozen_string_literal: true

class Organization < ApplicationRecord
  has_many :users, foreign_key: :belonged_organization_id
  has_many :posts, foreign_key: :belonged_organization_id

  validates :name, presence: true
end
