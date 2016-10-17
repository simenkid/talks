/*********************************************************/
/* Execute sequentially scheduled at each loop iteration */
/*  WARN:                                                */
/*    I am doing this to demonstrate the idea only.      */
/*  $ node 04_heavy_queue.js                             */
/*********************************************************/
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

var heavyJobs = {
    counts: 0,
    queue: [],
    _callback: null,
    add: function (task) {
        this.queue.push(task);
    },
    next: function (callback) {
        var self = this,
            task = this.queue.shift();
    
        if (!task) return;

        setImmediate(function () {
            self.counts = self.counts + task();
            if (self.queue.length === 0)
                self._callback(self.counts);
            else
                self.next();
        });
    },
    do: function (callback) {
        this._callback = callback;
        this.next();
    }
};

var total = 1e8,
    cuts = 100;

for (var i = 0; i < cuts; i++) {
    heavyJobs.add(function () {
        return doNotSoHeavy(total/cuts);
    });
}

setInterval(function () {
    console.log('I am not blocked');
}, 1000);

heavyJobs.do(function (counts) {
    console.log(counts);
});
