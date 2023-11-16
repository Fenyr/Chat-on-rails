class ChatroomController < ApplicationController
  def index
    @messages = Message.all
  end
  def add
    @msg = Message.new(msg_params)
    respond_to do |format|
    if @msg.save
      ActionCable.server.broadcast"chat_channel", {content: @msg}
      format.html { redirect_to "/" } 
      format.js
    end
  end
  end

  private
  def msg_params
    params.require(:message).permit(:body)
  end
end
