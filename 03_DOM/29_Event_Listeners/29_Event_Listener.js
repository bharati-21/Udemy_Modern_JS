const btn = document.querySelector('.clear-tasks');
// btn.addEventListener('click', function (e) {
//     // e: event object
//     e.preventDefault();
//     console.log('Hello World');
// });

btn.addEventListener('click', onClick);
function onClick(e) {
        // e: event object
        e.preventDefault();
        // console.log('Clicked');
    let val;
    val = e;
    
    console.log(val);

    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(e.type);
    console.log(e.timeStamp);
    console.log(e.clientX, e.clientY);
    console.log(e.offsetX, e.offsetY);


    e.target.innerText = 'Click this Button';
    };