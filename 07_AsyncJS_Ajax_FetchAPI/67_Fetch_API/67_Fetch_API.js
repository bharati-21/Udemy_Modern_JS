document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
    fetch('test.txt').then(function(response) {
        return response.text();
    }).then(function (data) {
        console.log(data);
        document.getElementById('output').innerHTML = data;
    }).catch(function (err) {
        console.log(err);
    });
}

// Get local JSON data
function getJson() {
    fetch('post.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let op = '';
            data.forEach(function (post) {
                op+= `<li>${post.title}</li>`
            });
            document.getElementById('output').innerHTML = op;
        })
        .catch(function (err) {
            console.log(err);
    });
}

// Get data from external API
function getExternal() {
    fetch('https://api.github.com/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let op = '';
            data.forEach(function (user) {
                op+= `<li>${user.login}</li>`
            });
            document.getElementById('output').innerHTML = op;
        })
        .catch(function (err) {
            console.log(err);
    });
}