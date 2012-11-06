define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/songs.html'
], function($, _, Backbone, songsTemplate){
    var SongsView = Backbone.View.extend({

      $el: $("#toprock"),

      //initialize: function() {
      //     _.bindAll(this, 'render');
      //},

      render: function() {
        var data = {}
        var compiledTemplate = _.template( songsTemplate, data);
    
        this.$el.html( compiledTemplate );
      }
    });

    return SongsView;
});
