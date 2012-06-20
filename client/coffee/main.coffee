$ ->
    entry = null
    
    nav = new fk.HashURIController({
        uri: 'cagna[1]',
        on_urichange: (uri) ->
            $.ajax {
                url: 'api/senses/ita/' + uri
                dataType: 'json'
                success: (response) ->
                    if entry?
                        entry.remove()
                        
                    entry = new wn.Entry({sense: response})
                    $('body').append(entry)
                error: () ->
                    console.log('AJAX error!')
            }
    })
    