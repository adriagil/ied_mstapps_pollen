window.Pollen = (function(Backbone, $){

  if (!Backbone) {
    throw new Error("Backbone should be installed!");
  }

  return {
    app: {},
    Models: {},
    Views: {},

    init: function() {
      Pollen.app = new Pollen.Router();
      Backbone.history.start({pushState: false});
    }
  };

})(Backbone, jQuery);

$(function(){
  Pollen.init();
});
