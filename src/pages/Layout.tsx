import React from 'react';
import AsideNavBar from '../components/AsideNavBar';
import SystemTerms from '../components/SystemTerms';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import Routes from '../routes';

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
                                <Routes />
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
                <SystemTerms />
            </div>
        );
    }
}
