/***********************************************/
/* Do you have a dead loop with EventEmitter?  */
/*  - uncomment the lines                      */
/*  $ node 03_deadloop.js                      */
/***********************************************/
var EventEmitter = require('events');

var crazy = new EventEmitter();

crazy.on('event1', function () {
    console.log('event1 fired!');
    crazy.emit('event2');

    // setImmediate(function () {
    //     crazy.emit('event2');
    // });

    // process.nextTick(function () {
    //     crazy.emit('event2');
    // });
});

crazy.on('event2', function () {
    console.log('event2 fired!');
    crazy.emit('event3');
});

crazy.on('event3', function () {
    console.log('event3 fired!');
    crazy.emit('event1');
});

crazy.emit('event1');
