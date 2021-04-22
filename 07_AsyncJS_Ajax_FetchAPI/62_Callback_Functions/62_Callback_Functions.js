const posts = [
    {title: 'Post One', body: 'This is Post One'},
    {title: 'Post Two', body: 'This is Post Two'},
    {title: 'Post Three', body: 'This is Post Three'},
]

// function createPost(post) {
//     setTimeout(function () {
//         posts.push(post);
//     }, 2000);
// }

// function getPost() {
//     setTimeout(function () {
//         let output = '';
//         posts.forEach(function (post) {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({ title: 'Post Four', body: 'This is Post Four' });
// getPost();

// function createPost(post, callback) {
//     setTimeout(function () {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// function getPost() {
//     setTimeout(function () {
//         let output = '';
//         posts.forEach(function (post) {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({ title: 'Post Four', body: 'This is Post Four' }, getPost);




function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);

            let error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('Something went wrong');
            }            
        }, 2000);
    });
}

function getPost() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({ title: 'Post Four', body: 'This is Post Four' }).then(getPost).catch(function (error) {
    console.log(error);
});
