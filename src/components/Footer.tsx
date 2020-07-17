import React from 'react';

const Footer = () => (
    <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Página Principal</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Serviços</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Quem Somos?</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="" data-toggle="modal" data-target="#systemTerms">Termos de Responsabilidade</a>
            </li>
        </ul>
        <span className="copyright ml-auto my-auto mr-2">Copyright © 2020
              <a href="#" rel="nofollow">FreeTone</a>
        </span>
    </footer>
);

export default Footer;