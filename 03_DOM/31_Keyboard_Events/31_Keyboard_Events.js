const form = document.querySelector('form');
const taskIp = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskIp.value = "";

// form.addEventListener('submit', runEvent);

// taskIp.addEventListener('keydown', runEvent);
// taskIp.addEventListener('keyup', runEvent);
// taskIp.addEventListener('keypress', runEvent);
// taskIp.addEventListener('focus', runEvent);
// taskIp.addEventListener('blur', runEvent);
// taskIp.addEventListener('cut', runEvent);
// taskIp.addEventListener('paste', runEvent);
// taskIp.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);

function runEvent(e) {
    // e.preventDefault();
    console.log(`Event Type: ${e.type}`);
    console.log(e.target.value);
    // Get Input Value
    // console.log(taskIp.value);
    // taskIp.value = "";

    heading.textContent = e.target.value;

}