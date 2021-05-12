import { http } from './http';
import { ui } from './ui';

// Get posts on Dom load
document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
  http.get('http://localhost:3000/posts')
    .then((posts) => ui.showPosts(posts))
    .catch((err) => console.log(err));
}

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  if (title !== '' && body !== '') {
    const data = {
      title,
      body
    };

    // create post request
    http.post('http://localhost:3000/posts', data)
      .then((data) => {
        ui.showAlert('Post Added', 'alert alert-success');
        ui.clearFields();
        getPosts();
      })
      .catch((err) => console.log(err));
  }
  else {
    ui.showAlert('Fields cannot be empty!', 'alert alert-danger');
  }
}