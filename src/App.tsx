import React from 'react';
import Routes from './routes';
import AsideNavBar from './components/AsideNavBar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import SystemTerms from './components/SystemTerms';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
