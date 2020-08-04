import React from 'react';
import PageHeader from '../../components/PageHeader';
import { CepService } from '../../services/cep.service';

interface IProps {
}

interface IState {
    FirstName: string;
    LastName: string;
    Nationality: string;
    About: string;
    Image: String;
}

export default class CreateSingerPage extends React.Component<IProps, IState> {
    private cepService: CepService = new CepService();

    constructor(props: IProps) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            Nationality: '',
            About: '',
            Image: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event: any) => {
        event.preventDefault();
        let { name, value } = event.target;
        this.setState({
            [name]: value
        } as IState);
    }

    render() {
        const { FirstName, LastName, Nationality, About, Image } = this.state;
        return (
            <div className="col-md-12 col-sm-12 mb-12">
                <PageHeader title="Cadastrar Artista" subtitle="FreeTone" link="/singers" />

                <div className="card card-small">
                    <div className="card-body d-flex">
                        <form className="row col-md-12">
                            <div className="col-md-12 text-center">
                                <div className="mb-3 mx-auto">
                                    <img className="rounded-circle" src="../images/avatars/user-image.png" alt="Naruto Uzumaki" width="150" /> </div>
                                <button type="button" className="mb-2 btn btn-sm btn-pill btn-outline-primary mr-2">
                                    <i className="material-icons mr-1">add_a_photo</i>Selecionar Imagem</button>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="form-group">
                                    <label htmlFor="FirstName">Nome</label>
                                    <input type="text" id="FirstName" name="FirstName" className="form-control" value={FirstName} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="form-group">
                                    <label htmlFor="LastName">Sobrenome</label>
                                    <input type="text" id="LastName" name="LastName" className="form-control" value={LastName} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="form-group">
                                    <label htmlFor="Nationality">Nacionalidade</label>
                                    <input type="text" id="Nationality" name="Nationality" className="form-control" value={Nationality} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="About">Sobre</label>
                                <textarea id="About" name="About" className="form-control" rows={5} value={About} />
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
