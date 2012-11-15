define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/song.html'
  ], function($, _, Backbone, songTemplate){
  var SongView = Backbone.View.extend({
    tagName: "tr",

    template: _.template(songTemplate),
    
    render: function(){
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }

    });

    return SongView;
});
