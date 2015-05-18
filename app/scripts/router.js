(function($){

  Pollen.Router = Backbone.Router.extend({
    routes: {
      '': 'homeRoute',
      'plants-list': 'plantsList'
    },

    homeRoute: function() {
      Pollen.app.currentAppView = new Pollen.Views.PlantsMapView();
    },

    plantsList: function() {
      Pollen.app.currentAppView = new Pollen.Views.PlantsListView();
    }
  });

})(jQuery);
