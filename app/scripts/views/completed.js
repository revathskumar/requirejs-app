define(['backbone', 'jquery'], function(Backbone, $){
  var CompletedView = Backbone.View.extend({
    el: "#todo-list",
    initialize: function(){
      console.log('CompletedView initialize');
    },
    render: function(){
      $(this.el).html("Completed View");
    }
  });

  return CompletedView;
});
