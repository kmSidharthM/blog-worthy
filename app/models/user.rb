# frozen_string_literal: true

class User < ApplicationRecord
  MAX_NAME_LENGTH = 25
  MIN_PASSWORD_LENGTH = 6
  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i.freeze

  belongs_to :organization, foreign_key: :belonged_organization_id
  has_many :posts, foreign_key: :post_owner_id

  has_secure_password
  has_secure_token :authentication_token

  validates :name, presence: true, length: { maximum: MAX_NAME_LENGTH }
  validates :password, length: { minimum: MIN_PASSWORD_LENGTH }, if: -> { password.present? }
  validates :password_confirmation, presence: true, on: :create
  before_save :to_lowercase

  private

    def to_lowercase
      email.downcase!
    end
end
