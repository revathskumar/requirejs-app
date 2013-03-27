require.config({
  paths:{
    "jquery" : "vendor/jquery/jquery",
    "backbone" : "vendor/backbone-amd/backbone",
    "underscore" : "vendor/underscore-amd/underscore"
  }
});


require(["scripts/views/app.js"], function(AppView){
  new AppView;
});
