const github = new GitHub();

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
                }
                else {
                    // console.log(data);
                    // Show profile
                }
            });
    }
    else {
        // Clear the profile
    }
});