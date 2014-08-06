Template.messages.helpers({
  username: function() {
    var user = Meteor.users.findOne({_id: this.user});
    if (user) {
      return user.username;
    }
  },

  me: function() {
    var user = Meteor.users.findOne({_id: this.user});

    if (user && Meteor.user() && user._id == Meteor.user()._id) {
      return 'me';
    }
  },

  picture: function() {
    var user = Meteor.users.findOne({_id: this.user});
    if (user && user.emails) {
      return Gravatar.imageUrl(user.emails[0].address);
    }
  }
});

Template.form.events({
  'submit form': function(event, template) {
    var message = template.find('textarea').value;
    Messages.insert({
      user: Meteor.user()._id,
      message: message,
      timestamp: (+new Date),
      room: Router.current().params.chatroom
    });
  }
})
