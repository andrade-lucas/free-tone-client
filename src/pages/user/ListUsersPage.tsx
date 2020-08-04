import React from 'react';
import CardHeader from '../../components/CardHeader';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

export default class ListUsersPage extends React.Component {
    render() {
        return (
            <div className="col-md-12 col-sm-12 mb-12">
                <PageHeader title="Lista de Usuário" subtitle="FreeTone" link="/" />

                <div className="card card-small mb-4">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item p-3">
                            <div className="row">
                                <div className="col">
                                    <table className="table mb-0">
                                        <thead className="bg-light">
                                            <tr>
                                                <th scope="col" className="border-0">Imagem</th>
                                                <th scope="col" className="border-0">Nome</th>
                                                <th scope="col" className="border-0">E-mail</th>
                                                <th scope="col" className="border-0">Tipo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><i className="material-icons">face</i></td>
                                                <td>Lucas Andrade</td>
                                                <td>lucasilva108@gmail.com</td>
                                                <td>Admin</td>
                                            </tr>
                                            <tr>
                                                <td><i className="material-icons">face</i></td>
                                                <td>David Costa</td>
                                                <td>david@teste.com</td>
                                                <td>Admin</td>
                                            </tr>
                                            <tr>
                                                <td><i className="material-icons">face</i></td>
                                                <td>Luis Gabriel</td>
                                                <td>luis_gabriel@teste.com</td>
                                                <td>Moderador</td>
                                            </tr>
                                            <tr>
                                                <td><i className="material-icons">face</i></td>
                                                <td>Daniel Ramos Mota</td>
                                                <td>daniel_ramos@teste.com</td>
                                                <td>User</td>
                                            </tr>
                                            <tr>
                                                <td><i className="material-icons">face</i></td>
                                                <td>Lucas Andrade</td>
                                                <td>lucasilva108@gmail.com</td>
                                                <td>Admin</td>
                                            </tr>
                                            <tr>
                                                <td><i className="material-icons">face</i></td>
                                                <td>David Costa</td>
                                                <td>david@teste.com</td>
                                                <td>Admin</td>
                                            </tr>
                                            <tr>
                                                <td><i className="material-icons">face</i></td>
                                                <td>Luis Gabriel</td>
                                                <td>luis_gabriel@teste.com</td>
                                                <td>Moderador</td>
                                            </tr>
                                            <tr>
                                                <td><i className="material-icons">face</i></td>
                                                <td>Daniel Ramos Mota</td>
                                                <td>daniel_ramos@teste.com</td>
                                                <td>User</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}