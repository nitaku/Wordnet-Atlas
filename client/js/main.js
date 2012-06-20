(function() {

  $(function() {
    var entry, nav;
    entry = null;
    return nav = new fk.HashURIController({
      uri: 'cagna[1]',
      on_urichange: function(uri) {
        return $.ajax({
          url: 'api/senses/ita/' + uri,
          dataType: 'json',
          success: function(response) {
            if (entry != null) entry.remove();
            entry = new wn.Entry({
              sense: response
            });
            return $('body').append(entry);
          },
          error: function() {
            return console.log('AJAX error!');
          }
        });
      }
    });
  });

}).call(this);
