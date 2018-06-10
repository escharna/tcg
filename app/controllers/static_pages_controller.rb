class StaticPagesController < ActionController::Base
  def index
    render nothing: true
  end
end
