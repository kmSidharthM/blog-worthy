# frozen_string_literal: true

json.post do
  json.id @post.id
  json.title @post.title
  json.description @post.description
  json.post_owner_id @post.user.id
  json.post_owner_name @post.user.name
end
