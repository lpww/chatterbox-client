
var app = {
  // username: window.location.search.substr(10),
  username: "yourMom",
  text: "Beware.",
  roomname: "4chan"
}


var getChats = function(){
 $.ajax({
    // always use this url
    url: 'https://api.parse.com/1/classes/chatterbox?order=-createdAt',
    type: 'GET',
    //data: JSON.stringify(app),
    contentType: 'application/json',
    success: function (data) {
      console.log(data);
      displayChats(data.results);
    } ,
    error: function (data) {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};



var submitChat = function(chat){
  $.ajax({
    // always use this url
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(chat),
    contentType: 'application/json',
    success: function (data) {
      // displayChats(data.results);
    } ,
    error: function (data) {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};

submitChat(app);

var displayChats = function(chatsArray){
  for (var i = 0; i < chatsArray.length; i++){
    var chat = _.escape(chatsArray[i].username + ': ' + chatsArray[i].text);
    $('#chats').append("<li>" + chat + "</li>");
  }
};


$("#refresher").click(getChats);
$("#send").click(function(){
  console.log($("#message").attr('value'));
});

