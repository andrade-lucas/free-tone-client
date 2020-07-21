import axios from 'axios';
import { HttpService } from './HttpService';
import { Address } from '../models/address.model';

export class CepService extends HttpService {
    async getInfo(cep: string): Promise<Address> {
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
        const { data } = result;
        return new Address(data.logradouro, '', data.bairro, data.localidade, data.uf, 'Brasil', data.cep);
    }
}