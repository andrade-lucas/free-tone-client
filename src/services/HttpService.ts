import axios, { AxiosInstance } from 'axios';

export abstract class HttpService {
    api: AxiosInstance;

    constructor() {
        const baseURL = 'http://localhost:5000/v1';
        this.api = axios.create({ baseURL });
    }
}
