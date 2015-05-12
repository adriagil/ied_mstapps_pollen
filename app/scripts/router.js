(function($){

  Pollen.Router = Backbone.Router.extend({
    routes: {
      '': 'homeRoute',
      'plantsList': 'plantsList'
    },

    homeRoute: function() {
      Pollen.app.currentAppView = new Pollen.Views.PlantsMapView();
    }
  });

})(jQuery);
