class UsersController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def index
    @users = User.all

    render json: @users.to_json, status: :ok
  end

  def create
    @user = User.new(users_params)
    if @user.save!
      render json: @user.to_json, status: :ok
    else
      render json: @user.errors.full_messages, status: :internal_server_error
    end
  end

  private

  def users_params
    params.require(:user).permit(:id, :username, :email)
  end
end
