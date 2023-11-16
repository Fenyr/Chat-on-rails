class ChatroomController < ApplicationController
  def index
    @messages = Message.all
  end
  def add
    @msg = Message.create(msg_params)
    redirect_to "/chatroom/index"
  end

  private
  def msg_params
    params.require(:message).permit(:body)
  end
end
