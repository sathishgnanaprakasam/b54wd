function sayHello(N) {
    if (N == 0) return;

    console.log('hello');
    sayHello(N-1);
}

sayHello(4);