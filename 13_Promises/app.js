// Immediately resolved promise
let myPromise = Promise.resolve('Foo');
myPromise.then(res => console.log(res));

let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(4)
    }, 3000);
});

promise1.then(res => {
    res += 3;
    console.log(res);
});

function getData(method, url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            }
            else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

getData('GET', 'https://jsonplaceholder.typicode.com/todos/')
    .then(
        function (res) {
            let todos = JSON.parse(res);
            output = ``;
            todos.forEach((todo) => {
                output += `
                    <ul>
                        <li>User ID: ${todo.userId}</li>
                        <li>ID: ${todo.id}</li>
                        <li>Title: ${todo.title}</li>
                        <li>Completed: ${todo.completed}</li>

                    </ul>
                `
            });
            document.body.innerHTML = output;
        })
    .catch((err) => console.log(err));