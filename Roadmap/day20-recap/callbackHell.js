function timer(count, callback) {
    setTimeout(function () {
        callback(function () {
            setTimeout(function () {
                console.log('after 10 seconds');
            }, 5000)
        });
    }, count * 1000);
}

timer(5, function (cb) {
    console.log('after 5 seconds');
    cb();
});