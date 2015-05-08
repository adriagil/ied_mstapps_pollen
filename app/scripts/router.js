(function($){

  Pollen.Router = Backbone.Router.extend({
    routes: {
      '': 'homeRoute'
    },

    homeRoute: function() {
      Pollen.app.currentAppView = new Pollen.Views.PlantsMapView();
    }
  });

})(jQuery);
