import { HttpService } from "./HttpService";
import axios from "axios";

export class CategoryService extends HttpService {
    private endpoint: string = `${this.baseUrl}/categories`;

    constructor() { 
        super();
    }

    public async get(): Promise<any> {
        const result = await axios.get(this.endpoint);
        const { data } = result;
        return data;
    }

    public async create(model: any): Promise<any> {
        const result = await axios.post(this.endpoint, model);
        const { data } = result;
        return data;
    }

    public async update(id: string, model: any): Promise<any> {
        const result = await axios.put(`${this.endpoint}/${id}`, model);
        const { data } = result;
        return data;
    }
}