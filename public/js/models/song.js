define([
  'underscore',
  'backbone'
], function(_, Backbone) {
     var SongModel = Backbone.Model.extend({
       defaults: {
         title: "nonamed song",
         year: 1999,
         band: "nonamed band"
       }
     });
     return SongModel;
}); 
