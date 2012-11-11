define([
  'underscore',
  'backbone',
  'models/song'
  ], function(_, Backbone, Song){
       var SongsCollection = Backbone.Collection.extend({
         model: Song,
         url: 'json/ranking.json',
       });
       return new SongsCollection;
});
