import React from 'react';

const UserProfileInfo = (props: any) => {
    return (
        <div className="col-lg-4">
            <div className="card card-small mb-4 pt-3">
                <div className="card-header border-bottom text-center">
                    <div className="mb-3 mx-auto">
                        <img className="rounded-circle" src="../images/avatars/user-image.png" alt="Naruto Uzumaki" width="150" /> </div>
                    <h4 className="mb-0">Naruto Uzumaki</h4>
                    <span className="text-muted d-block mb-2">Padrão</span>
                    <button type="button" className="mb-2 btn btn-sm btn-pill btn-outline-primary mr-2">
                        <i className="material-icons mr-1">add_a_photo</i>Trocar Imagem</button>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item px-4">
                        <div className="progress-wrapper">
                            <strong className="text-muted d-block mb-2">Status do Perfil</strong>
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                    <span className="progress-value">50%</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item p-4">
                        <strong className="text-muted d-block mb-2">Sobre</strong>
                        <span>O Naruto pode ser um pouco duro às vezes, talvez você não saiba disso, mas o Naruto também cresceu sem pai. Na verdade ele nunca conheceu nenhum de seus pais, e nunca teve nenhum amigo em nossa aldeia. Mesmo assim eu nunca vi ele chorar, ficar zangado ou se dar por vencido, ele está sempre disposto a melhorar, ele quer ser respeitado, é o sonho dele e o Naruto daria a vida por isso sem hesitar. Meu palpite é que ele se cansou de chorar e decidiu fazer alguma coisa a respeito!</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default UserProfileInfo;