export class HttpService {
    baseURL = 'http://localhost:3001/';
    get(url) {
        return fetch(this.baseURL + url).then((resp) => resp.json())
    }
    post(url, data) {
        return fetch(this.baseURL + url, {
            method: 'POST',
            body: data
        }).then(resp => resp.json())
    }
}