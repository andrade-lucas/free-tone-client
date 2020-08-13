import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
        <ul className="nav">
            <li className="nav-item">
                <Link to="/" className="nav-link">Página Principal</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link">Serviços</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link">Quem Somos?</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="" data-toggle="modal" data-target="#systemTerms">Termos de Responsabilidade</a>
            </li>
        </ul>
        <span className="copyright ml-auto my-auto mr-2">Copyright © 2020
              <Link to="/" href="#" rel="nofollow">FreeTone</Link>
        </span>
    </footer>
);

export default Footer;