(function($){

  Pollen.Views.PlantsListView = Backbone.View.extend({
    el: $('.pollen-map-container'),

    template: 'plantsList',

    /*events: {
      "click .pollen-map-container img": "displayPopup"
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

        /*$(".pollen-map-container img").on("click", function(){
          that.displayPopup();
        });*/
      });
      return this;
    }
  });

})(jQuery);
