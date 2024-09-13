# frozen_string_literal: true

json.array! @posts do |post|
  json.extract! post,
    :id,
    :title,
    :description,
    :upvotes,
    :downvotes,
    :is_blog_worthy,
    :slug

  json.post_owner do
    json.extract! post.user,
      :id,
      :name
  end
end
