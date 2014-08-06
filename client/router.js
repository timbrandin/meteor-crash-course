Router.map(function() {
  this.route('home', {
    path: '/',
    template: 'chatrooms',
    data: function() {
      return {rooms: Chatrooms.find()};
    }
  });

  this.route('chatroom', {
    path: '/room/:chatroom',
    template: 'messages',
    data: function() {
      return {messages: Messages.find({room: this.params.chatroom}, {sort: {timestamp: 1}})};
    }
  });
});
