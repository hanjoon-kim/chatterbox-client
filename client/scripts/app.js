// YOUR CODE HERE:
var App = function() {
  this.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';
  // this.msgArr = [];
};

// console.log('url display yaaaa: ' + window.location.search);
// var test1 = document.getElementById('username') === null? 'no username currently' : document.getElementById('username').value;
// console.log('this is test1: ' + test1)
App.prototype.init = function() {
  // username on click should invoke handleUsername
  // ('.username').on('click', function() {
  //   handleUsernameClick();
  // });
  
  // submit on click should invoke handlesubmit
  // ('.submit').on('click', function() {
  //   handleSubmit();
  // })
  // for (let i = 0; i < $('#chats').length; i++) {
  //   renderMessage();
  // }
}

App.prototype.test = function() {
  alert('solid test');
}

var storeMessage = function() {
  alert(document.getElementById('msg').value);
};
// var test1 = document.getElementById('username')



App.prototype.send = function() {
  var messageSend = {
    username: 'Kakashi',
    text: document.getElementById('msg').value,
    roomname: 'Hiroshima'
  };
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'POST',
    data: JSON.stringify(messageSend),
    contentType: 'application/json',
    success: function (data) {
      // console.log(data);
      return App.prototype.fetch(); 
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
}

App.prototype.fetch = function() {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    data: 'order=-createdAt',
    contentType: 'application/json',
    success: function (data) {
      return App.prototype.renderMessage(data);
      
      
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to receive message', data);
    }
  });
  
}

App.prototype.clearMessages = function() {
  $('#chats').empty();
}

App.prototype.renderMessage = function(data) {
  $( ".textarea").append(`<p>${data['results'][0]['username']} : </p>`);  
  $( ".textarea").append(`<p>${data['results'][0]['text']}</p>`);
  //grab username
  //grab message
  //format username/message into an appendable string

  // $('#chats').append(`<p>${message}</p>`);
}

App.prototype.renderRoom = function() {
  $('#roomSelect').append("<p>superLobby</p>");

}

App.prototype.handleUsernameClick = function() {
  
}

App.prototype.handleSubmit = function() {

}


var message = {
  username: 'Mel Brooks',
  text: 'It\'s good to be the king',
  roomname: 'lobby'
};


var app = new App();

// app.renderMessage();