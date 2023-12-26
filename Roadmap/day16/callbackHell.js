// Pain of callback or callback hell
// nested callbacks

let firstTask = function (callback) {
    console.log('starting first task');
    setTimeout(() => {
        console.log('first task is completed');
        callback();
    }, 2000);   
}

let secondTask = function (callback) {
    console.log('starting second task');
    setTimeout(() => {
        console.log('second task is completed');
        callback();
    }, 2000);
}

let thirdTask = function (callback) {
    console.log('starting third task');
    setTimeout(() => {
        console.log('third task is completed');
        callback();
    }, 2000);
}

// callback hell or pain of callback
firstTask(function () {
    secondTask(function () {
        thirdTask(function () {
            console.log('all the tasks are completed');
        });
    });
});