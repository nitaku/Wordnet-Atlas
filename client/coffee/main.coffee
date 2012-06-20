$ ->
    entry = null
    
    nav = new fk.HashURIController({
        uri: 'libro[1]',
        on_urichange: (uri) ->
            $.ajax {
                url: 'api/senses/ita/' + uri
                dataType: 'json'
                success: (response) ->
                    console.log('Response arrived.')
                    
                    if entry?
                        entry.remove()
                        
                    entry = new wn.Entry({sense: response})
                    $('body').append(entry)
                    
                    console.log('Rendering done.')
                error: () ->
                    console.log('AJAX error!')
            }
            
            console.log('Request sent.')
    })
    