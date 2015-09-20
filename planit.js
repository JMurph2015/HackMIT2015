if (Meteor.isClient) {
  $('#menuIcon').click(function(){
      $(body).prepend('<div class="leftMenu" id="leftContainer"></div>');
      $('#leftContainer').
  });
}
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
