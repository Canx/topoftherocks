define([
  'jquery',
  'underscore',
  'backbone',
  'collections/songs',
  'views/song'
], function($, _, Backbone, Songs, SongView){
    var RankingView = Backbone.View.extend({

      el: "#toprock",

      initialize: function() {
        Songs.bind('refresh', this.render);
        Songs.fetch();
        //Songs.add({id:1, song:"xxx",year:1978,band:"yyyy"});
      },

      addSong: function(song) {
        var view = new SongView({model: song});
        this.$("#songs").append(view.render().el); 
        return this;
      },

      render: function() {
        Songs.each(this.addSong);
      }

    });

    return RankingView;
});
