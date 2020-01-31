import axios from 'axios';

export class HttpService {
    baseURL = 'http://server.sstation.ae/api/';
    // baseURL = 'http://127.0.0.1:8000/api/';
    get(url) {
        return fetch(this.baseURL + url)
            .then((resp) => resp.json())
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }
    post(url, data) {
        return fetch(this.baseURL + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())
    }
    axPost(url, data) {
        return axios.post(this.baseURL + url, data, {
        })
            .then(response => {
                return response.data
            })
            .catch(err => console.error(err));
    }
}