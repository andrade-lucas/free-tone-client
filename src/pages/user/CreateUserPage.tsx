import React from 'react';
import PageHeader from '../../components/PageHeader';
import { CepService } from '../../services/cep.service';

interface IProps {
}

interface IState {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    Birthdate: string;
    Street: string;
    Number: string;
    Neighborhood: string;
    City: string;
    State: string;
    Country: string;
    ZipCode: string;
    Image: String;
}

export default class CreateUserPage extends React.Component<IProps, IState> {
    private cepService: CepService = new CepService();

    constructor(props: IProps) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            Password: '',
            Birthdate: '',
            Street: '',
            Number: '',
            Neighborhood: '',
            City: '',
            State: '',
            Country: '',
            ZipCode: '',
            Image: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleZipCodeSearch = this.handleZipCodeSearch.bind(this);
    }

    handleInputChange = (event: any) => {
        event.preventDefault();
        let { name, value } = event.target;
        this.setState({
            [name]: value
        } as IState);
    }

    handleZipCodeSearch = async (event: any) => {
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
        const { FirstName, LastName, Email, Password, Birthdate, Street, Number, Neighborhood, City, State, Country, ZipCode, Image } = this.state;
        return (
            <div className="col-md-12 col-sm-12 mb-12">
                <PageHeader title="Cadastrar Usuário" subtitle="FreeTone" link="/" />

                <div className="card card-small">
                    <div className="card-body d-flex">
                        <form className="row col-md-12">
                            <div className="col-md-12 text-center">
                                <div className="mb-3 mx-auto">
                                    <img className="rounded-circle" src="../images/avatars/user-image.png" alt="Naruto Uzumaki" width="150" /> </div>
                                <button type="button" className="mb-2 btn btn-sm btn-pill btn-outline-primary mr-2">
                                    <i className="material-icons mr-1">add_a_photo</i>Selecionar Imagem</button>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="FirstName">Nome</label>
                                    <input type="text" id="FirstName" name="FirstName" className="form-control" value={FirstName} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="LastName">Sobrenome</label>
                                    <input type="text" id="LastName" name="LastName" className="form-control" value={LastName} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="Email">E-mail</label>
                                    <input type="text" id="Email" name="Email" className="form-control" value={Email} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="Password">Senha</label>
                                    <input type="password" id="Password" name="Password" className="form-control" value={Password} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="Birthdate">Aniversário</label>
                                    <input type="date" id="Birthdate" name="Birthdate" className="form-control" value={Birthdate} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="form-group">
                                    <label htmlFor="ZipCode">CEP</label>
                                    <div className="input-group">
                                        <input type="text" id="ZipCode" name="ZipCode" className="form-control" value={ZipCode} onChange={this.handleInputChange} />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" onClick={this.handleZipCodeSearch}><i className="material-icons">search</i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="form-group">
                                    <label htmlFor="State">Estado</label>
                                    <input type="text" id="State" name="State" className="form-control" value={State} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="Country">País</label>
                                    <input type="text" id="Country" name="Country" className="form-control" value={Country} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12 col-md-9">
                                <div className="form-group">
                                    <label htmlFor="Street">Rua</label>
                                    <input type="text" id="Street" name="Street" className="form-control" value={Street} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="form-group">
                                    <label htmlFor="Number">Número</label>
                                    <input type="text" id="Number" name="Number" className="form-control" value={Number} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="Neighborhood">Bairro</label>
                                    <input type="text" id="Neighborhood" name="Neighborhood" className="form-control" value={Neighborhood} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="City">Cidade</label>
                                    <input type="text" id="City" name="City" className="form-control" value={City} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <div className="form-group text-right">
                                    <button type="submit" className="btn btn-primary"><i className="material-icons">save</i> Salvar</button>
                                    &nbsp;
                                    <button type="button" className="btn btn-default">Cancelar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
