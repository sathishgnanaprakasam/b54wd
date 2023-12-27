/*
    What is a promise?

    Promise is an object which holds the eventual result of an asynchronous operation.
    It is a placeholder for the result of an asynchronous operation. It will become available at some point in future.

    callback functions: give me a function, I will call it back later.

    callback functions are the functions which are passed as arguments to another function and are invoked inside the outer function to complete some action.

    Asynchronous Vs Scynchronous

    Scenario 1: downloading a movie file from internet and then playing it.

    Scenario 2: streaming a movie from internet and playing it.

    Solution:

    Scenario 1: 
        - synchronous: downloading the movie, playing the video
        - asynchronous: displaying the loading screen, handling the user input

    Scenario 2:
        - synchronous: downloading the movie file, initializing the video player, playing the video
        - asynchronous: streaming the video, buffering, preloading the video, handling the user input

    Promise States:

    1. Pending: initial state, neither fulfilled nor rejected.
    2. Fulfilled: meaning that the operation completed successfully.
    3. Rejected: meaning that the operation failed.
*/  