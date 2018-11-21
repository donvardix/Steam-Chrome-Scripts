var GenerateQueue = function( queueNumber ){
    console.log( 'Queue #' + ++queueNumber );
    jQuery.post( 'https://store.steampowered.com/explore/generatenewdiscoveryqueue', { sessionid: g_sessionID, queuetype: 0 } ).done( function( data ){
        var requests = []; 
        for( var i = 0; i < data.queue.length; i++ )        {
            requests.push( jQuery.post( 'https://store.steampowered.com/app/10', { appid_to_clear_from_queue: data.queue[ i ], sessionid: g_sessionID } ) );
        }   
        jQuery.when.apply( jQuery, requests ).done( function()        {
            if( queueNumber < 3 )            {
                GenerateQueue( queueNumber );
            }
            else  {
                window.location.reload();
            }
        } );
    } );
};
GenerateQueue( 0 );
