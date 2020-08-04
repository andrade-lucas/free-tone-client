import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

export default class ListCategoriesPage extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-12 col-sm-12 mb-12">
                <PageHeader title="Lista de Categorias" subtitle="FreeTone" link="" />

                <div className="card card-small">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item p-3">
                            <div className="row">
                                <div className="col">
                                    <table className="table mb-0">
                                        <thead className="bg-light">
                                            <tr>
                                                <th scope="col" className="border-0">Nome</th>
                                                <th scope="col" className="border-0"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Rock'n'Roll</td>
                                                <td className="text-right">
                                                    <Link to={'/categories/update/1'} className="btn btn-primary"><i className="material-icons">edit</i></Link>
                                                    &nbsp;
                                                    <button className="btn btn-danger"><i className="material-icons">delete</i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Rock'n'Roll</td>
                                                <td className="text-right">
                                                    <Link to={'/categories/update/1'} className="btn btn-primary"><i className="material-icons">edit</i></Link>
                                                    &nbsp;
                                                    <button className="btn btn-danger"><i className="material-icons">delete</i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Rock'n'Roll</td>
                                                <td className="text-right">
                                                    <Link to={'/categories/update/1'} className="btn btn-primary"><i className="material-icons">edit</i></Link>
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
