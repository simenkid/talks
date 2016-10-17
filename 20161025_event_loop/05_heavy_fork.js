/*********************************************************/
/* Do the job in another thread by fork()                */
/*  WARN: spawn is expensive!                            */
/*  $ node 05_heavy_fork.js                              */
/*********************************************************/
var fork = require('child_process').fork;

function doHeavyWithWorker(callback) {
    var worker = fork('./heavy_jobs.js');

    worker.once('message', function (counts) {
        callback(counts);
    });
}

setInterval(function () {
    console.log('I am not blocked');
}, 1000);

doHeavyWithWorker(function (result) {
    console.log(result.counts);
});
