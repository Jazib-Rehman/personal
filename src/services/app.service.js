import React, { Component } from 'react';

const baseURL = 'http://localhost:3001/';

export class HttpService {
    baseURL = 'http://localhost:3001/';
}


export class AppService extends HttpService {

    static getProduct() {
        return fetch(baseURL + 'products')
            .then(response => response.json());
    }
}
