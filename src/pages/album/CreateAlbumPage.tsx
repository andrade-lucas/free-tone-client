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
            <>
                <PageHeader title="Álbum" subtitle="Cadastrar novo álbum" />

                <div className="row">
                    <div className="col-md-12 col-sm-12 mb-12">
                        <div className="card card-small">
                            <div className="card-body d-flex">
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="FirstName">Título</label>
                                        <input type="text" id="Title" name="Title" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="LastName">Descrição</label>
                                        <input type="text" id="Description" name="Description" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}