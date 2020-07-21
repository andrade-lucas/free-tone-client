import React from 'react';
import { Link } from 'react-router-dom';

export default class TopBar extends React.Component {
  render() {
    return (
      <div className="main-navbar sticky-top bg-white">
        <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
          <form action="#" className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
            <div className="input-group input-group-seamless ml-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-search"></i>
                </div>
              </div>
              <input className="navbar-search form-control" type="text" placeholder="Pesquisar..." aria-label="Search" />
            </div>
          </form>
          <ul className="navbar-nav border-left flex-row ">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <img className="user-avatar rounded-circle mr-2" src="images/avatars/user-image.png" alt="Imagem de Usuário" />
                <span className="d-none d-md-inline-block">Naruto Uzumaki</span>
              </a>
              <div className="dropdown-menu dropdown-menu-small">
                <Link to="/account/profile" className="dropdown-item">
                  <i className="material-icons">&#xE7FD;</i> Perfil</Link>
                <Link to="/" className="dropdown-item">
                  <i className="material-icons">settings</i> Configurações</Link>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-danger" href="#">
                  <i className="material-icons text-danger">&#xE879;</i> Sair </a>
              </div>
            </li>
          </ul>
          <nav className="nav">
            <a href="#" className="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left" data-toggle="collapse" data-target=".header-navbar" aria-expanded="false" aria-controls="header-navbar">
              <i className="material-icons">&#xE5D2;</i>
            </a>
          </nav>
        </nav>
      </div>
    );
  }
}
