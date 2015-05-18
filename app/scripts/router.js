(function($){

  Pollen.Router = Backbone.Router.extend({
    routes: {
      '': 'homeRoute',
      'inici':'inici',
      'video':'video'

    },

    homeRoute: function() {
      Pollen.app.currentAppView = new Pollen.Views.PlantsMapView();
    },

    inici: function() {
      Pollen.app.currentAppView = new Pollen.Views.inici();
    },
    
    video: function() {
      Pollen.app.currentAppView = new Pollen.Views.video();
    }
  });

})(jQuery);
