const clrBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clrBtn.addEventListener('click', runEvent);
// clrBtn.addEventListener('dblclick', runEvent);
// clrBtn.addEventListener('mousedown', runEvent);
// clrBtn.addEventListener('mouseup', runEvent);
// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);
card.addEventListener('mousemove', runEvent);


// Event Handler
function runEvent(e) {
    e.preventDefault();
    console.log(`Event Type: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}