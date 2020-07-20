import React from 'react';
import PageHeader from '../../components/PageHeader';

interface IProps {
}

export default class ListAlbumsPage extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-12 col-sm-12 mb-12">
                <div className="card card-small">
                    <div className="card-body d-flex">
                        <h1>Listagem de Álbuns</h1>
                    </div>
                </div>
            </div>
        );
    }
}
