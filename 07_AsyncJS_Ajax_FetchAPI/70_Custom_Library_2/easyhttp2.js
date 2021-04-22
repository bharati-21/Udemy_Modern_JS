/**
    * EasyHTTP Library
    * Library for making HTTP requests
    *
    * @version 2.0.
    * @author Bharati Subramanian
    * @license MIT
    *
**/

class EasyHTTP {
    // Make an HTTP GET Request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(data));
        });   
    }

    // Make HTTP POST Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(data));
        });   
    }

    // Make a HTTP PUT Request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(data));
        });   
    }

    // Make a HTTP Delete Request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(() => resolve('Resource Deleted'))
            .catch(err => reject(data));
        });     
    }
}