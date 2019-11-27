import React, { Component } from 'react';
import { HttpService } from './http.service'

class AppService extends HttpService {
    getMethode(url) {
        return this.get(url)
    }
    postMethode(url, data) {
        return this.post(url, data)
    }
    axiosPost(url, data) {
        return this.axPost(url, data)
    }
}
export default new AppService()
