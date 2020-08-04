import React from 'react';
import axios from 'axios';
import CardHeader from './CardHeader';
import { CepService } from '../services/cep.service';

interface IProps {
}

interface IState {
    Id: string;
    FirstName: string;
    LastName: string;
    Birthdate: string;
    Email: string;
    Street: string;
    Number: string;
    Neighborhood: string;
    City: string;
    State: string;
    Country: string;
    ZipCode: string;
}

export default class UserProfileForm extends React.Component<IProps, IState> {
    private cepService: CepService = new CepService();

    constructor(props: any) {
        super(props);
        this.state = {
            Id: '',
            FirstName: '',
            LastName: '',
            Birthdate: '',
            Email: 'naruto_uzumaki@konoha.com',
            Street: '',
            Number: '',
            Neighborhood : '',
            City: '',
            State: '',
            Country: '',
            ZipCode: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleZipCodeSearch = this.handleZipCodeSearch.bind(this);
    }

    handleInputChange(event: any) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        } as IState);
    }

    async handleZipCodeSearch(event: any) {
        event.preventDefault();
        const result = await this.cepService.getInfo(this.state.ZipCode);
        this.setState({
            Street: result.Street,
            Neighborhood: result.Neighborhood,
            City: result.City,
            State: result.State,
            Country: result.Country,
            ZipCode: result.ZipCode
        });
    }
    
    render() {
        const { Id, FirstName, LastName, Birthdate, Email, Street, Number, Neighborhood, City, State, Country, ZipCode } = this.state;
        
        return (
            <div className="col-lg-8">
                <div className="card card-small mb-4">
                    <CardHeader title="Detalhes da Conta" />
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item p-3">
                            <div className="row">
                                <div className="col">
                                    <form>
                                        <div className="form-row">
                                            <input type="hidden" name="Id" value={Id} />
                                            <input type="hidden" name="Image" value="" />
                                            <div className="form-group col-md-6">
                                                <label htmlFor="FirstName">Nome</label>
                                                <input type="text" className="form-control" id="FirstName" name="FirstName" value={FirstName} onChange={this.handleInputChange} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="LastName">Sobrenome</label>
                                                <input type="text" className="form-control" id="LastName" name="LastName" value={LastName} onChange={this.handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="fePassword">Aniversário</label>
                                                <input type="date" className="form-control" id="Birthdate" name="Birthdate" value={Birthdate} onChange={this.handleInputChange} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="Email">E-mail</label>
                                                <input type="email" disabled className="form-control" id="Email" name="Email" value={Email} onChange={this.handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-4">
                                                <label htmlFor="ZipCode">CEP</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="ZipCode" name="ZipCode" maxLength={9} value={ZipCode} onChange={this.handleInputChange} />
                                                    <div className="input-group-append">
                                                        <button type="button" className="btn btn-primary" onClick={this.handleZipCodeSearch}><i className="material-icons">search</i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="State">Estado</label>
                                                <input type="text" className="form-control" id="State" name="State" maxLength={2} value={State} onChange={this.handleInputChange} />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="Country">País</label>
                                                <input type="text" className="form-control" id="Country" name="Country" value={Country} onChange={this.handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-8">
                                                <label htmlFor="Street">Rua</label>
                                                <input type="text" className="form-control" id="Street" name="Street" value={Street} onChange={this.handleInputChange} />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="Number">Número</label>
                                                <input type="text" className="form-control" id="Number" name="Number" value={Number} onChange={this.handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="neighborhood">Bairro</label>
                                                <input type="text" className="form-control" id="Neighborhood" name="Neighborhood" value={Neighborhood} onChange={this.handleInputChange} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="City">Cidade</label>
                                                <input type="text" className="form-control" id="City" name="City" value={City} onChange={this.handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label htmlFor="Description">Sobre</label>
                                                <textarea className="form-control" name="Description" rows={5} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12 text-right">
                                                <button type="submit" className="btn btn-accent"><i className="material-icons">save</i> Atualizar Conta</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}