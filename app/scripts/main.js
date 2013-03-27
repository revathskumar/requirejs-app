require.config({
  paths:{
    "jquery" : "vendor/jquery/jquery.js",
    "backbone" : "vendor/backbone-amd/backbone.js",
    "underscore" : "vendor/underscore-amd/underscore.js"
  }
});


require(["views/app.js"], function(AppView){
  new AppView;
});
