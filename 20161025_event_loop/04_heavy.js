/***********************************************/
/* A heavy task will block the event loop.     */
/*  This example takes ~10s on my machine      */
/*  $ node 04_heavy.js                         */
/***********************************************/
function doHeavy () {
    // Counts how many 1s occurred
    var count = 0;

    for (var i = 0; i < 1e8; i++) {
        if (Math.round(Math.log(
            Math.sqrt(Math.abs(Math.round(Math.random() * 1000)))
        )) === 1)
            count++;
    }
    return count;
}

setInterval(function () {
    console.log('I am not blocked');
}, 1000);

console.log(doHeavy());  // Takes around 10 seconds on my machine

