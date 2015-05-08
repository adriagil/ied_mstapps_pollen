(function($){

  TemplateManager = {
    templates: {},

    get: function(id, callback){
      var template = this.templates[id];

      if (template) {
        callback(template);
      } else {
        var that = this;
        $.get("scripts/templates/" + id + ".hbs", function(template){
          that.templates[id] = template;
          callback(template);
        });
      }
    }

  }

})(jQuery);
