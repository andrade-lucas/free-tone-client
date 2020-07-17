import React from 'react';
import { Link } from 'react-router-dom';

export default class AsideNavBar extends React.Component {
    render() {
        return (
            <aside className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
                <div className="main-navbar">
                    <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                        <Link to="/" className="navbar-brand w-100 mr-0" href="#" style={{ lineHeight: '25px' }}>
                            <div className="d-table m-auto">
                                <img id="main-logo" className="d-inline-block align-top mr-1" style={{ maxWidth: '25px' }} src="images/song-icon.png" alt="FreeTone" />
                                <span className="d-none d-md-inline ml-1">FreeTone</span>
                            </div>
                        </Link>
                        <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                            <i className="material-icons">&#xE5C4;</i>
                        </a>
                    </nav>
                </div>
                <div className="nav-wrapper">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">
                                <i className="material-icons">home</i>
                                <span>Página Principal</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                <i className="material-icons">vertical_split</i>
                                <span>Lançamentos</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-nowrap" data-toggle="dropdown" href="add-new-post.html">
                                <i className="material-icons">note_add</i>
                                <span>Adicionar</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-small">
                                <a className="dropdown-item" href="user-profile-lite.html">
                                    <i className="material-icons">&#xE7FD;</i> Usuário</a>
                                <Link to="albums/create" className="dropdown-item">
                                    <i className="material-icons">album</i> Álbum</Link>
                                <div className="dropdown-divider"></div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                <i className="material-icons">view_module</i>
                                <span>Relatórios &amp; Análises</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                <i className="material-icons">album</i>
                                <span>Meus Álbuns</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                <i className="material-icons">person</i>
                                <span>Meu Perfil</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="" data-toggle="modal" data-target="#systemTerms">
                                <i className="material-icons">error</i>
                                <span>Termos de Responsabilidade</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}