class StaticPagesController < ActionController::API
  def index
    thing = {
      hello: 'hello'
    }

    render json: thing, status: :ok
  end
end
