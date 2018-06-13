class StaticPagesController < ActionController::API
  def index
    render nothing: true
  end
end
