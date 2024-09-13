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
    post = current_user.posts.new(post_params)
    post.save!
    render_notice(t("successfully_created", entity: "Task"))
  end

  private

    def post_params
      params.require(:post).permit(
        :title, :description,
        :belonged_organization_id).merge!(belonged_organization_id: @current_user.belonged_organization_id)
    end

    def load_posts
      @posts = Post.where(belonged_organization_id: @current_user.belonged_organization_id)
    end

    def load_post
      @post = Post.find_by!(slug: params[:slug])
    end
end
