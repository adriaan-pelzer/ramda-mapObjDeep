# ramda-mapObjDeep

## A deep version of ramda.js mapObj

It's as simple as that. It does the same as the [ramda.js](http://ramdajs.com/) function [mapObj](http://ramdajs.com/0.15/docs/#mapObj), except that it traverses the object tree entirely.

```
    var mapObjDeep = require ( 'ramda-mapobjdeep' );

    mapObjDeep ( function ( value ) {
        if ( typeof ( value ) === 'number' ) {
            return value + 1;
        }

        return value + '(not a number)';
    }, {
        number: 12,
        numbers: [ 12, 13, 14 ],
        numbersObj: {
            twelve: 12,
            thirteen: 13,
            fourteen: 14
        },
        string: 'twelve',
        strings: [ 'twelve', 'thirteen', 'fourteen' ],
        numbersObj: {
            twelve: 'twelve',
            thirteen: 'thirteen',
            fourteen: 'fourteen'
        },
    } );
```
