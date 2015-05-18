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

        $(".pollen-map-container img").on("click", function(){
          that.displayPopup();
        });

        $(".pollen-map-container img").on("mouseover", function(){
          /*$(this).css("opacity","0.5");
          $(this).css("border","5px solid red");*/
          $(this).addClass("highlighted");
        });

        $(".pollen-map-container img").on("mouseout", function(){
          /*$(this).css("opacity","1");
          $(this).css("border","none");*/
          $(this).removeClass("highlighted");
        });
      });
      return this;
    },

    displayPopup: function() {
      alert("you've just clicked an image!");
    }
  });

})(jQuery);
