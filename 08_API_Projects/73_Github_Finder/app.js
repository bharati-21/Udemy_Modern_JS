const github = new GitHub;
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Add event listener to search user
searchUser.addEventListener('keyup', (e) => {
    // Get input value
    const userText = e.target.value;

    if (userText !== '') {
        // console.log(userText);

        // Make HTTP call
        github.getUser(userText)
            .then((data) => {
                if (data.profile.message === 'Not Found') {
                    // alert('User Not Found!');
                    // Show alert
                    ui.showAlert('User Not Found!', 'alert alert-danger')

                }
                else {
                    // console.log(data);
                    // Show profile
                    ui.showProfile(data.profile);
                }
            });
    }
    else {
        // Clear the profile
        ui.clearProfile();
    }
});