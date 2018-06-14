class ImagesController < ApplicationController
  def serve
    #path = "/my/servers/image/path/#{params[:filename]}"
    path = "#{Rails.root}/lib/assets/game/images/#{params[:filename]}.jpg"

    send_file( path,
      :disposition => 'inline',
      :type => 'image/jpeg',
      :x_sendfile => true )
  end
end
