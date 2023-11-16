import consumer from "channels/consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    var node = document.createElement("P");
    node.classList.add("px-2","py-1","bg-orange-200","self-end","rounded-lg");
    
    var textnode = document.createTextNode(data.content.body); 
    
    node.appendChild(textnode); 

    var temp = document.getElementById("new_msg");
    temp.appendChild(node);
    temp.scrollTop = temp.scrollHeight;
    document.getElementById('chat_msg').value= ''
  }
});
