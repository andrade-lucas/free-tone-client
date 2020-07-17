import { HttpService } from "./HttpService";

export class AlbumService extends HttpService {
    private url: string = this.baseUrl + 'albums';

    constructor() {
        super();
    }

    // public get(): Promise<any[]> {
    //     return 
    // }
}