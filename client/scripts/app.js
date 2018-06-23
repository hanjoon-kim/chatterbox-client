// YOUR CODE HERE:

var App = function() {
  this.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';
  // this.msgArr = [];
};

// console.log('url display yaaaa: ' + window.location.search);
// var test1 = document.getElementById('username') === null? 'no username currently' : document.getElementById('username').value;
// console.log('this is test1: ' + test1)
App.prototype.init = function() {
  app.fetch();

  //To-Do List:
  //Make the room functionality working
  //Add friend functionality
  //Refresh page organically using setInterval
  //Make page look pretty


  
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
  var tempUsername = window.location.search.slice(10).replace('%20', ' ');
  var messageSend = {
    username: tempUsername,
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
      
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
}


App.prototype.fetch = function(roomname = '') {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    data: { order: '-createdAt',
            limit: 20 },
    contentType: 'application/json',
    success: function (data) {

      for (var i = 0; i < data.results.length; i++) {

        // console.log(data.results[i].roomname);
        App.prototype.renderMessage(data.results[i]);
      } 
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
    var messageCheck = `${data.username} : ${data.text}`
    messageCheck = messageCheck.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  // for (let i = 0; i < data.length; i++) {
    $( ".textarea").append(`<span id = "chat">${messageCheck}<br /></span>`);  
  // }
  //grab username
  //grab message
  //format username/message into an appendable string

  // $('#chats').append(`<p>${message}</p>`);
}

App.prototype.renderRoom = function(data) {

  $.ajax({
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    data: { order: '-createdAt',
            limit: 20 },
    contentType: 'application/json',
    success: function (data) {
      var setRoomname = new Set;
      for (var i = 0; i < data.results.length; i++) {
        setRoomname.add(data.results[i].roomname); 
        App.prototype.renderMessage(data.results[i]);
      }
      console.log(setRoomname);
      var arrayRoomname = [...setRoomname];
      for (var j = 0; j < arrayRoomname.length; j++) {
        $( ".room").append(`<option value = "roomname">${arrayRoomname[j]}</option>`);  
      }
      
      $('#roomButton').click(function() {
        App.prototype.clearMessages();
        for (var i = 0; i < data.results.length; i++) {
          if (data.results[i].roomname == $('#roomList option:selected').text()) {
            App.prototype.renderMessage(data.results[i]);
          }
          // console.log(data.results[i].roomname);
          
        }
        // console.log($('#roomList option:selected').text());
      });
 
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to receive message', data);
    }
  });
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
app.init();
// app.fetch();
app.renderRoom();