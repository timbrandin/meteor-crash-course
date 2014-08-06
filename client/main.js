Template.messages.helpers({
  messages: function() {
    return Messages.find();
  },

  username: function() {
    var user = Meteor.users.findOne({_id: this.user});
    if (user) {
      return user.username;
    }
  },

  picture: function() {
    var user = Meteor.users.findOne({_id: this.user});
    if (user && user.emails) {
      return Gravatar.imageUrl(user.emails[0].address);
    }
  }
});
