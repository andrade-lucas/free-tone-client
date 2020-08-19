import axios, { AxiosInstance } from 'axios';

export abstract class HttpService {
    baseUrl: string = 'http://localhost:5000/v1';
    api: AxiosInstance;

    constructor() {
        this.api = axios.create({ baseURL: this.baseUrl });
    }
}
