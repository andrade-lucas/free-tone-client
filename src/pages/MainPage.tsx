import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

export default class MainPage extends React.Component {
    render() {
        return (
            <div className="col-md-12 col-sm-12 mb-12">
                <PageHeader title="Página Principal" subtitle="FreeTone" />
                
                <div className="card card-small">
                    <div className="card-body d-flex">
                        <h1>Página Principal</h1>
                    </div>
                </div>
            </div>
        );
    }
}
