export class HttpService {
    baseURL = 'http://localhost:3001/';
    get(url) {
        return fetch(this.baseURL + url).then((resp) => resp.json())
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
}