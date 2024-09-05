# frozen_string_literal: true

class Post < ApplicationRecord
  MAXIMUM_TITLE_LENGTH = 125

  validates :title, presence: true, length: { maximum: MAXIMUM_TITLE_LENGTH }
  validate :is_net_vote_negative
  validates_inclusion_of :is_blog_worthy, in: [true, false]

  def is_net_vote_negative
    if upvotes - downvotes < 0
      errors.add(:base, "Net votes cannot acquire a negative value")
    end
  end
end
