class SessionsController < Devise::SessionsController
  def new
    render json: { hello: 'hello' }.to_json
  end
end
