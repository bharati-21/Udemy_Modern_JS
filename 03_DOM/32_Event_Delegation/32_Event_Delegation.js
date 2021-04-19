// Event Bubbling

// document.querySelector('.card-title').addEventListener('click', function (e) {
//     console.log('card title');
// });
// document.querySelector('.card-content').addEventListener('click', function (e) {
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function (e) {
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function (e) {
//     console.log('col');
// });


// Event Delegation
document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    // console.log(e.target);
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}