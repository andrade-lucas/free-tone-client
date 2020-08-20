import { HttpService } from "./HttpService";

export class CategoryService extends HttpService {
    private endpoint: string = '/categories';

    constructor() {
        super();
    }

    public async get(): Promise<any> {
        const result = await this.api.get(this.endpoint);
        const { data } = result;
        return data;
    }

    public async create(model: any): Promise<any> {
        const result = await this.api.post(this.endpoint, model);
        const { data } = result;
        return data;
    }

    public async update(id: string, model: any): Promise<any> {
        const result = await this.api.put(`${this.endpoint}/${id}`, model);
        const { data } = result;
        return data;
    }
}