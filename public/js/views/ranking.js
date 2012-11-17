define([
  'jquery',
  'underscore',
  'backbone',
  'collections/songs',
  'views/song'
], function($, _, Backbone, Songs, SongView){
    var RankingView = Backbone.View.extend({

      el: $("#ranking"),

      events: {
        'click #song' : 'sort',
        'click #year' : 'sort',
        'click #band' : 'sort'
      },

      initialize: function() {
        Songs.bind('reset', this.render, this);
        Songs.bind('refresh', this.render, this);
        Songs.fetch();
      },

      addSong: function(song) {
        var view = new SongView({model: song});
        this.$("#songs").append(view.render().el); 
        return this;
      },

      render: function() {
        this.$("#songs").empty();
        Songs.each(this.addSong);
      },

      sort: function(param) {
        Songs.comparator = function(song) {
          return song.get(param.target.id);
        }
        Songs.sort();
      }

    });

    return RankingView;
});
