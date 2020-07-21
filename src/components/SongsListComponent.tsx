import React from 'react';
import CardHeader from './CardHeader';
import { Link } from 'react-router-dom';

const SongsListComponent = (props: any) => {
    return (
        <div className="col-lg-8">
            <div className="card card-small mb-4">
                <CardHeader title="Músicas do Álbum" />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item p-3">
                        <div className="row">
                            <div className="col">
                                <table className="table mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-0">Título</th>
                                            <th scope="col" className="border-0">Banda</th>
                                            <th scope="col" className="border-0"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Welcome to the jungle</td>
                                            <td>Gun's'Roses</td>
                                            <td className="text-right"><Link to="/"><i className="material-icons">cloud_download</i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>Welcome to the jungle</td>
                                            <td>Gun's'Roses</td>
                                            <td className="text-right"><Link to="/"><i className="material-icons">cloud_download</i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>Welcome to the jungle</td>
                                            <td>Gun's'Roses</td>
                                            <td className="text-right"><Link to="/"><i className="material-icons">cloud_download</i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>Welcome to the jungle</td>
                                            <td>Gun's'Roses</td>
                                            <td className="text-right"><Link to="/"><i className="material-icons">cloud_download</i></Link></td>
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

export default SongsListComponent;