define(['backbone'], function(Backbone){
  var RootView = Backbone.View.extend({
    el: "#todo-list",
    initialize: function(){
      console.log('RootView initialize');
    },
    render: function(){
      $(this.el).html("Root View");
    }
  });

  return RootView;
});
