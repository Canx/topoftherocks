define([
  'jquery',
  'underscore',
  'backbone',
  'collections/songs',
  'views/song'
], function($, _, Backbone, Songs, SongView){
    var RankingView = Backbone.View.extend({

      list: [ { id: 1, song: "Anarchy in the UK", year: 1977, band: "Sex Pistols"},
              { id: 2, song: "Black is Black",    year: 1966, band: "Los Bravos"},
              { id: 3, song: "Bohemian Rapsody", year: 1975,  band: "Queen"}],

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
