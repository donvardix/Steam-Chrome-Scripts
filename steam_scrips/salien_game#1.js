setInterval(function(){
    if ( typeof gGame.m_State.m_Grid !== 'undefined' ) {
        for ( var diffCounter = 3; diffCounter > 0; diffCounter-- ) { // hard, medium, easy
            for ( var zoneCounter = 0; zoneCounter < 96; zoneCounter++ ) {
                if ( !gGame.m_State.m_PlanetData.zones[zoneCounter].captured &&
                      gGame.m_State.m_PlanetData.zones[zoneCounter].difficulty === diffCounter ) {
                    gServer.JoinZone(
                        zoneCounter,
                        function ( results ) {
                            gGame.ChangeState( new CBattleState( gGame.m_State.m_PlanetData, zoneCounter ) );
                        },
                        GameLoadError
                    );
                    return;
                }
            }
        }
    }
    if ( typeof gGame.m_State.m_EnemyManager !== 'undefined' ) {
        gGame.m_State.m_EnemyManager.m_rgEnemies.forEach( function( enemy ) {
            enemy.Die( true );
        });
    }
    if ( typeof gGame.m_State.m_VictoryScreen !== 'undefined' ) {
        gGame.ChangeState( new CBattleSelectionState( gGame.m_State.m_PlanetData.id ) );
    }
}, 2500);
