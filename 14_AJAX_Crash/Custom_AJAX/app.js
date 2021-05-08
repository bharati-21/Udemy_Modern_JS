const http = new easyHttp();


// Get post
http.get('https://jsonplaceholder.typicode.com/posts',
    (err, res) => {
        if (!err)
            console.log(res);
        else
            console.log(err);
});


// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};


// Post new data
http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
        if (!err)
            console.log(post);
        else
            console.log(err);
});

// Edit data (Put)
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
    if (!err)
        console.log(post);
    else
        console.log(err);
});

// Delete Data
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
    if (!err)
        console.log(post);
    else
        console.log(err);
});