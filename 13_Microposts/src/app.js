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
  const id = document.querySelector('#id').value;

  if (title !== '' && body !== '') {
    const data = {
      title,
      body
    };

    if (id !== '') {
      http.put(`http://localhost:3000/posts/${id}`, data)
      .then((data) => {
        ui.showAlert('Post Updated', 'alert alert-success');
        ui.changeFormState('add');
        getPosts();
      })
      .catch((err) => console.log(err));
    }
    else {
      // create post request
      http.post('http://localhost:3000/posts', data)
        .then((data) => {
          ui.showAlert('Post Added', 'alert alert-success');
          ui.clearFields();
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
  else {
    ui.showAlert('Fields cannot be empty!', 'alert alert-danger');
  }
}

// Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

function deletePost(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains('delete-post')) {
    const id = e.target.parentElement.dataset.id;

    if (confirm('Are you sure you want to delete this post?')) {
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          ui.showAlert('Post Deleted', 'alert alert-success');
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
}


document.querySelector('#posts').addEventListener('click', enableEdit);

function enableEdit(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains('edit-post')) {
    const id = e.target.parentElement.dataset.id;
    console.log(id);

    http.get(`http://localhost:3000/posts/${id}`)
      .then((post) => {
        console.log(post);
        const data = {
          id: post.id,
          title: post.title,
          body: post.body
        };
        ui.fillForm(data);
      })
      .catch((err) => console.log(err));
  }
}

document.querySelector('.card-form').addEventListener('click', cancelEdit);

function cancelEdit(e) {
  e.preventDefault();
  if (e.target.classList.contains('cancel-edit')) {
    ui.changeFormState('add');
  }
}

