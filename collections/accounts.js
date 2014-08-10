if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
}

if (Meteor.isServer) {
  Meteor.publish(null, function() {
    return Meteor.users.find({}, {fields: {username: 1, profile: 1, emails: 1}});
  })
}
