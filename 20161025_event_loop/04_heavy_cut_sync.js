/********************************************************/
/* Still blocks if exection of sub-task is synchronous. */
/*  This example takes ~10s on my machine               */
/*  $ node 04_heavy_cut_sync.js                         */
/********************************************************/
function doNotSoHeavy (times) {
    var count = 0;

    for (var i = 0; i < times; i++) {
        if (Math.round(Math.log(
            Math.sqrt(Math.abs(Math.round(Math.random() * 1000)))
        )) === 1)
            count++;
    }
    return count;
}

function doHeavy() {
    var total = 1e8,
        cuts = 100,
        counts = 0;

    for (var i = 0; i < cuts; i++) {
        counts = counts + doNotSoHeavy(total/cuts);
    }
    return counts;
}

setInterval(function () {
    console.log('I am not blocked');
}, 1000);

console.log(doHeavy());  // Takes around 10 seconds on my machine

