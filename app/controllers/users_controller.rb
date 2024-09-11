# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :load_user!, only: :show
  def show
    render
  end

  private

    def load_user!
      @user = User.find(params[:id])
    end
end
