function doHeavy () {
    // Counts how many 1s occurred
    var count = 0;

    for (var i = 0; i < 1e8; i++) {
        if (Math.round(Math.log(
            Math.sqrt(Math.abs(
                Math.round(Math.random() * 1000))
            )
        )) === 1)
            count++;
    }
    return count;
}

var counts = doHeavy();

process.send({
    counts: counts
});
