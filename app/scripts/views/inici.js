(function($){

  Pollen.Views.inici = Backbone.View.extend({
    el: $('.pollen-map-container'),

    template: 'inici',

    /*events: {
      "click .pollen-map-container h1": "changeColor"
    },*/

    initialize: function() {
      _.bindAll(this, 'render');

      this.render();
    },

    render: function() {
      var that = this;

      TemplateManager.get(this.template, function(template){
        var html = Handlebars.compile(template);
        that.$el.html(html);
      });
      return this;
    }
  });

})(jQuery);
