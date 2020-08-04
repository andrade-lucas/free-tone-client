import React from 'react';
import PageHeader from '../../components/PageHeader';

export default class CreateCategoryPage extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-12 col-sm-12 mb-12">
                <PageHeader title="Cadastrar Categoria" subtitle="FreeTone" link="/categories" />

                <div className="card card-small">
                    <div className="card-body d-flex">
                        <form className="row col-md-12">
                            <div className="col-12 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="Title">Título</label>
                                    <input type="text" id="Title" name="Title" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="Description">Descrição</label>
                                    <textarea id="Description" rows={7} name="Description" className="form-control" />
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
