const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami, Florida',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 29,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
];

const profiles = profileIterator(data);
document.getElementById('next').addEventListener('click', nextProfile);

// call first profile
nextProfile();

function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profile-dipslay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Gender: ${currentProfile.gender}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
                <li class="list-group-item">Preference: ${currentProfile.lookingfor}</li>
            </ul>
        `;
        document.getElementById('image-display').innerHTML = `
            <img src="${currentProfile.image}">
        `;
    }
    else {
        // no more profiles
        window.location.reload();
    }
    
}

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                {
                    value: profiles[nextIndex++],
                    done: false
                } :
                {
                    done: true
                }
        }
    };
}