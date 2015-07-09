var R = require ( 'ramda' );

module.exports = function ( func, obj ) {
    return R.mapObj ( function ( value ) {
        var o;

        if ( R.type ( value ) === 'Object' ) {
            return module.exports ( func, value );
        }

        if ( R.type ( value ) === 'Array' ) {
            o = module.exports ( func, value );
            return Object.keys ( o ).map ( function ( key ) { return o[ key ] } );
        }

        return func ( value );
    }, obj );
};

if ( ! module.parent ) {
    ( function ( testData ) {
        console.log ( module.exports ( function ( value ) {
            var global = {
                captured: 'replacement'
            };

            var regex = /%%(.*)%%/;
            var match = regex.exec ( value );

            if ( match ) {
                return R.replace ( regex, global[match[1]], value );
            }

            return value;
        }, testData ) );
    } )( {
        hallo: 'bye',
        bye: '%%captured%%',
        array: [
            'hallo',
            'bye',
            '%%captured%%'
        ],
        object: {
            hallo: 'bye',
            bye: '%%captured%%'
        }
    } );
}
