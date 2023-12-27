function getPosts(urls) {
    let requests = [];

    for (let url of urls) {
        requests.push(fetch(url).then(response => response.json()));
    }

    console.log(requests);
    return Promise.all(requests);
}

let postsURLS = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

getPosts(postsURLS)
    .then((posts) => {
        console.log(posts);
    }
);