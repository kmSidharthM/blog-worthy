# frozen_string_literal: true

class PostsController < ApplicationController
  before_action :load_posts, only: :index
  before_action :load_post, only: :show
  def index
    render
  end

  def show
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

    def load_post
      @post = Post.find_by!(slug: params[:slug])
    end
end
