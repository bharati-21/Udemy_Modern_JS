class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.formState = 'add';
        this.formEnd = document.querySelector('.form-end');
    }

    showPosts(posts) {
        let output = '';
        posts.forEach((post) => {
            output += `
                <div class="card mb-3 bg-light text-dark">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id=${post.id}><i class="fas fa-pencil-alt"></i></a>
                        <a href="#" class="delete card-link" data-id=${post.id}><i class="fas fa-times"></i></a>
                    </div>
                </div>
            `;
        });

        this.post.innerHTML = output;
    }

    showAlert(msg, className) {
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));

        // const container = document.querySelector('.postsContainer');
        // container.insertBefore(div, this.post);

        document.querySelector('.form-end').appendChild(div);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }
}

export const ui = new UI();