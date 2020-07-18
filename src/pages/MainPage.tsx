import React from 'react';
import PageHeader from '../components/PageHeader';

export default class MainPage extends React.Component {
    render() {
        return (
            <>
                <PageHeader title="FreeTone" subtitle="Página Princilal" />

                <div className="row">
                    <div className="col-md-12 col-sm-12 mb-12">
                        <div className="card card-small">
                            <div className="card-body d-flex">
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="FirstName">Nome</label>
                                        <input type="text" id="FirstName" name="FirstName" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="LastName">Sobrenome</label>
                                        <input type="text" id="LastName" name="LastName" className="form-control" />
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
