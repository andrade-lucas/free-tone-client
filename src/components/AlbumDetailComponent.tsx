import React from 'react';

const AlbumDetailComponent = (props: any) => {
    return (
        <div className="col-lg-4">
            <div className="card card-small mb-4 pt-3">
                <div className="card-header border-bottom text-center">
                    <div className="mb-3 mx-auto">
                        <img className="" src="https://upload.wikimedia.org/wikipedia/pt/2/23/Guns_N%27_Roses_-_Chinese_Democracy.jpg" alt="Naruto Uzumaki" width="150" /> </div>
                    <h4 className="mb-0">Chinese Democracy</h4>
                    <span className="text-muted d-block mb-2">Guns'n'Roses</span>
                    <button type="button" className="mb-2 btn btn-sm btn-pill btn-outline-primary mr-2">
                        <i className="material-icons mr-1">cloud_download</i>Baixar Álbum</button>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item px-4">
                        <div className="progress-wrapper">
                            <strong className="text-muted d-block mb-2">Welcome to the jungle <i className="material-icons">pause_circle_outline</i></strong>
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} style={{ width: '33%' }}>
                                    <span className="progress-value">33%</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item p-4">
                        <strong className="text-muted d-block mb-2">Sobre</strong>
                        <span>
                            Guns N' Roses é uma banda norte-americana de hard rock formada em Los Angeles, Califórnia, em 1985. A banda já lançou seis álbuns de estúdio, três EPs e um álbum ao vivo. A banda já vendeu mais de 100 milhões de cópias em todo o mundo, sendo cerca de 43 milhões somente nos Estados Unidos.
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AlbumDetailComponent;