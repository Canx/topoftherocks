require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    text: 'libs/require/text'
  }

});

require(['views/ranking'], function(RankingView){
  var ranking_view = new RankingView;
  ranking_view.render();
});
