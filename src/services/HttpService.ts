import axios from 'axios';

export abstract class HttpService {
    baseUrl: string = 'http://localhost:5000/v1';

    constructor() {
        this.initAxios();
    }

    private initAxios(): void {
        axios.create({ baseURL: this.baseUrl });
    }
}
