import React, { Component } from 'react';
import { HttpService } from './http.service'

class AppService extends HttpService {
    getProduct() {
        return this.get('products')
    }
    addProduct(data) {
        return this.post('add', data)
    }
}
export default new AppService()
