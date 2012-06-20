(function() {

  $(function() {
    var entry, nav;
    entry = null;
    return nav = new fk.HashURIController({
      uri: 'libro[1]',
      on_urichange: function(uri) {
        $.ajax({
          url: 'api/senses/ita/' + uri,
          dataType: 'json',
          success: function(response) {
            console.log('Response arrived.');
            if (entry != null) entry.remove();
            entry = new wn.Entry({
              sense: response
            });
            $('body').append(entry);
            return console.log('Rendering done.');
          },
          error: function() {
            return console.log('AJAX error!');
          }
        });
        return console.log('Request sent.');
      }
    });
  });

}).call(this);
