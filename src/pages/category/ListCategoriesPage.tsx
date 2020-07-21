import React from 'react';
import PageHeader from '../../components/PageHeader';

export default class ListCategoriesPage extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-12 col-sm-12 mb-12">
                <PageHeader title="Lista de Categorias" subtitle="FreeTone" link="" />

                <div className="card card-small">
                    <div className="card-body d-flex">
                        <h2>Listagem de Categorias</h2>
                    </div>
                </div>
            </div>
        );
    }
}
