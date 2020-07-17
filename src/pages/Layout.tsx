import React from 'react';
import AsideNavBar from '../components/AsideNavBar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <AsideNavBar />
                        <div className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                            <TopBar />
                            <div className="main-content-container container-fluid px-4">
                                <div className="page-header row no-gutters py-4">
                                    <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                                        <span className="text-uppercase page-subtitle">Página Principal</span>
                                        <h3 className="page-title">FreeTone</h3>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg col-md-12 col-sm-12 mb-12">
                                        <div className="card card-small">
                                            <div className="card-body d-flex">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="">Nome</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
