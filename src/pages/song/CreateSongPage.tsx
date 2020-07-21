import React from 'react';
import PageHeader from '../../components/PageHeader';

export default class CreateSongPage extends React.Component {
    render() {
        return (
            <div className="col-md-12 col-sm-12 mb-12">
                <PageHeader title="Cadastrar Música" subtitle="FreeTone" />

                <div className="card card-small">
                    <div className="card-body d-flex">
                        <form className="row col-md-12">
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="FirstName">Título</label>
                                    <input type="text" id="Title" name="Title" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="SingerId">Cantor</label>
                                    <select className="form-control" id="SingerId" name="SingerId">
                                        <option selected disabled>Selecione uma opção</option>
                                        <option>...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="AlbumId">Álbum</label>
                                    <select className="form-control" id="AlbumId" name="AlbumId">
                                        <option selected disabled>Selecione uma opção</option>
                                        <option>...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="PublishedDate">Data de Lançamento</label>
                                    <input type="date" id="PublishedDate" name="PublishedDate" className="form-control" />
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
