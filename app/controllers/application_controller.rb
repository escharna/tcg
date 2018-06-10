class ApplicationController < ActionController::Base
 #  include ActionController::MimeResponds
 #
 #  protect_from_forgery with: :exception
 #
 #  after_action :set_csrf_cookie
 #  respond_to :json
 #
 # # Allows cookies with csrf token to post delete update
 # def set_csrf_cookie
 #   cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
 # end
 protect_from_forgery prepend: true
 before_action :authenticate_user!

 def index
   render nothing: true
 end

 # protected
 #  def verified_request?
 #    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
 #  end
end
