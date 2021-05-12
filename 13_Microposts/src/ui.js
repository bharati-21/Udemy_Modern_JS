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
                        <a href="#" class="edit-post card-link" data-id=${post.id}><i class="fas fa-pencil-alt"></i></a>
                        <a href="#" class="delete-post card-link" data-id=${post.id}><i class="fas fa-times"></i></a>
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

    fillForm(data) {
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value = data.id;

        this.changeFormState('edit');
    }

    changeFormState(state) {
        if (state === 'edit') {
            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.className = 'post-submit btn btn-warning btn-block mb-2';

            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'cancel-edit btn btn-dark btn-block mb-4';
            cancelBtn.appendChild(document.createTextNode('Cancel Edit'));

            const cardForm = document.querySelector('.card-form');
            const formEnd = document.querySelector('.form-end');
            cardForm.insertBefore(cancelBtn, formEnd);

        } else {
            this.postSubmit.className = 'post-submit btn btn-primary btn-block';
            this.postSubmit.textContent = 'Post It';

            const cancel = document.querySelector('.cancel-edit');
            if (cancel) {
                cancel.remove();

                this.clearIdInput();
                this.clearFields();
            }
        }
    }

    clearIdInput() {
        this.idInput.value = '';
    }

    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }
}

export const ui = new UI();