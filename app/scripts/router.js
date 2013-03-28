define(['backbone','views/root', 'views/completed'], function(Backbone, RootView, CompletedView){
  var AppRouter = Backbone.Router.extend({
    routes:{
      '' : 'root',
      'completed' : 'completed',
      'pending' : 'pending',
      '.*': "404"
    },

    initialize: function(){
      console.log("Router initialize");
    },

    root: function(){
      var rootView = new RootView();
      rootView.render();
    },

    completed: function(){
      var completedView = new CompletedView();
      completedView.render();
    },

    404: function(){

    }
  });

  return AppRouter;
});
