# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :load_user!, only: :show
  skip_before_action :authenticate_user_using_x_auth_token, only: :create

  def show
    render
  end

  def create
    user = User.new(user_params)
    user.save!
    render_notice(t("successfully_created", entity: "User"))
  end

  private

    def load_user!
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
end
