# frozen_string_literal: true

class PostsController < ApplicationController
  def index
    posts = Post.all
    newPosts = posts.map do |post|
      {
        post:,
        post_owner: post.user.name
      }
    end
    render status: :ok, json: { posts: newPosts }
  end

  def create
    post = Post.new(post_params)
    post.save!
    render status: :ok, json: { notice: "Successful" }
  end

  private

    def post_params
      params.require(:post).permit(:title, :description)
    end
end
