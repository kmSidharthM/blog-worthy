# frozen_string_literal: true

json.array! @posts do |post|
  json.id post.id
  json.title post.title
  json.description post.description
  json.upvotes post.upvotes
  json.downvotes post.downvotes
  json.is_blog_worthy post.is_blog_worthy

  json.post_owner do
    json.id post.user.id
    json.name post.user.name
  end
end
