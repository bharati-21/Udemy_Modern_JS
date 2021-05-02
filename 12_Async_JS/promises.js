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


// createPost({ title: 'Post 4', body: 'This is Post 4' })
//     .then(getPosts, err => document.body.innerHTML = err);

/* Async / Await */

async function init() {
    await createPost({ title: 'Post 4', body: 'This is Post 4' });
    getPosts();
}

init();

/* Promise.all */
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye');
// });

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));

// Async Await Fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();

