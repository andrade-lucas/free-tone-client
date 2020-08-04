import React from 'react';
import PageHeader from '../../components/PageHeader';

interface IProps { }

interface IState {
    Id: string;
    Title: string;
    Description: string;
}

export default class UpdateCategoryPage extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            Id: '',
            Title: '',
            Description: ''
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
        const { Id, Title, Description } = this.state;
        return (
            <div className="col-md-12 col-sm-12 mb-12">
                <PageHeader title="Atualizar Categoria" subtitle="FreeTone" link="/categories" />

                <div className="card card-small">
                    <div className="card-body d-flex">
                        <form className="row col-md-12">
                            <input type="hidden" name="Id" value={Id} />
                            <div className="col-12 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="Title">Título</label>
                                    <input type="text" id="Title" name="Title" className="form-control" value={Title} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="Description">Descrição</label>
                                    <textarea id="Description" rows={7} name="Description" className="form-control" value={Description} onChange={this.handleInputChange} />
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
