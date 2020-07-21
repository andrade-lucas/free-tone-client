import React from 'react';
import PageHeader from '../../components/PageHeader';

interface IProps {
}

interface IState {
}

export default class CreateAlbumPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="col-md-12 col-sm-12 mb-12">
                <PageHeader title="Cadastrar Álbum" subtitle="FreeTone" />
                
                <div className="card card-small">
                    <div className="card-body d-flex">
                        <div className="row col-md-12">
                            <div className="col-12 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="FirstName">Título</label>
                                    <input type="text" id="Title" name="Title" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="LastName">Descrição</label>
                                    <textarea id="Description" rows={7} name="Description" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}