const posts = [
    {title: 'Post 1', body: 'This is Post 1'},
    {title: 'Post 2', body: 'This is Post 2'},
    {title: 'Post 3', body: 'This is Post 3'},
];

/* ASYNCHRONOUS CODE WITH PROMISES */
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `
                <ul>
                    <li>${post.title}</li>
                    <li>${post.body}</li>
                </ul>`;

        });
        document.body.innerHTML = output;

    }, 1000);
}


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            }
            else {
                reject('Error: Something went wrong!');
            }

        }, 2000);
    });
}


createPost({ title: 'Post 4', body: 'This is Post 4' })
    .then(getPosts)
    .catch(err => document.body.innerHTML = err);