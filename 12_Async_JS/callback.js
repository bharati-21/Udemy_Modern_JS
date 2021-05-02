const posts = [
    {title: 'Post 1', body: 'This is Post 1'},
    {title: 'Post 2', body: 'This is Post 2'},
    {title: 'Post 3', body: 'This is Post 3'},
];

/* SYNCHRONOUS CODE */
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
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

getPosts();
createPost({ title: 'Post 4', body: 'This is Post 4' });

