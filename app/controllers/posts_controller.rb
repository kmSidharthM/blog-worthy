# frozen_string_literal: true

class PostsController < ApplicationController
  before_action :load_posts, only: :index
  def index
    render
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

    def load_posts
      @posts = Post.all
    end
end
