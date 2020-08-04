import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

export default class ListSingersPage extends React.Component {
    render() {
        return (
            <div className="col-md-12 col-sm-12 mb-12">
                <PageHeader title="Lista de Artístas" subtitle="FreeTone" link="/" />

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
                                                <th scope="col" className="border-0">Nacionalidade</th>
                                                <th scope="col" className="border-0"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><i className="material-icons">face</i></td>
                                                <td>Lucas Andrade</td>
                                                <td>Brasileiro</td>
                                                <td className="text-right">
                                                    <Link to={'/singers/update/1'} className="btn btn-primary"><i className="material-icons">edit</i></Link>
                                                    &nbsp;
                                                    <button className="btn btn-danger"><i className="material-icons">delete</i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="material-icons">face</i></td>
                                                <td>Lucas Andrade</td>
                                                <td>Brasileiro</td>
                                                <td className="text-right">
                                                    <Link to={'/singers/update/1'} className="btn btn-primary"><i className="material-icons">edit</i></Link>
                                                    &nbsp;
                                                    <button className="btn btn-danger"><i className="material-icons">delete</i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="material-icons">face</i></td>
                                                <td>Lucas Andrade</td>
                                                <td>Brasileiro</td>
                                                <td className="text-right">
                                                    <Link to={'/singers/update/1'} className="btn btn-primary"><i className="material-icons">edit</i></Link>
                                                    &nbsp;
                                                    <button className="btn btn-danger"><i className="material-icons">delete</i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="material-icons">face</i></td>
                                                <td>Lucas Andrade</td>
                                                <td>Brasileiro</td>
                                                <td className="text-right">
                                                    <Link to={'/singers/update/1'} className="btn btn-primary"><i className="material-icons">edit</i></Link>
                                                    &nbsp;
                                                    <button className="btn btn-danger"><i className="material-icons">delete</i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="material-icons">face</i></td>
                                                <td>Lucas Andrade</td>
                                                <td>Brasileiro</td>
                                                <td className="text-right">
                                                    <Link to={'/singers/update/1'} className="btn btn-primary"><i className="material-icons">edit</i></Link>
                                                    &nbsp;
                                                    <button className="btn btn-danger"><i className="material-icons">delete</i></button>
                                                </td>
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