require.config({
  paths:{
    "jquery" : "vendor/jquery/jquery",
    "backbone" : "vendor/backbone-amd/backbone",
    "underscore" : "vendor/underscore-amd/underscore"
  },
  shim:{
    'backbone': {
      deps:['underscore','jquery'],
      exports: 'Backbone'
    }
  }
});


require(["scripts/router.js", 'backbone'], function(AppRouter, Backbone){
  new AppRouter();
  Backbone.history.start();
});
