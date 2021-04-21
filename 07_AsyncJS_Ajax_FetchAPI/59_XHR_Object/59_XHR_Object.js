document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'data.txt', true);
  // console.log('READY STATE', xhr.readyState);

  // optional - used for spinners or loaders
  xhr.onprogress = function () {
    console.log('READY STATE', xhr.readyState); // state 3
  }

  // when onload loads, at step 4 
  xhr.onload = function () {
    console.log('READY STATE', xhr.readyState);
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // xhr.onreadystatechange = function () {
  //   console.log('READY STATE', xhr.readyState);

  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // } /* OLD SYNTAX */

  xhr.onerror = function () {
    console.log('Request error...');
  }

  xhr.send();

}

/*
  HTTP Status
  200: "OK"
  403: "Forbidden"
  404: "Not Found"
*/

/*
  readyState Values
  0: request not initiated
  1: server connection established
  2: request received
  3: processing request
  4: request finished and response is ready
*/