import React from 'react';
import { UserProfile } from '../../models/user-profile.model';
import PageHeader from '../../components/PageHeader';

interface IProps {
}

interface IState {
    isBusy: boolean;
    user: UserProfile | any;
}

export default class ProfilePage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isBusy: false,
            user: null
        };
    }

    handleCepSearch = (event: any) => {
        const cep = event.target.value;
    } 

    render() {
        return (
            <div>
                <PageHeader title="Meu Perfil" subtitle="FreeTone" link="/" />

                <div className="row">
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
                    <div className="col-lg-8">
                        <div className="card card-small mb-4">
                            <div className="card-header border-bottom">
                                <h6 className="m-0">Detalhes da Conta</h6>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-3">
                                    <div className="row">
                                        <div className="col">
                                            <form>
                                                <div className="form-row">
                                                    <input type="hidden" name="Id" />
                                                    <input type="hidden" name="Image" value="" />
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="FirstName">Nome</label>
                                                        <input type="text" className="form-control" id="FirstName" name="FirstName" placeholder="Nome" value="Naruto" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="LastName">Sobrenome</label>
                                                        <input type="text" className="form-control" id="LastName" name="LastName" placeholder="Sobrenome" value="Uzumaki" />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="fePassword">Aniversário</label>
                                                        <input type="date" className="form-control" id="Birthdate" name="Birthdate" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="Email">E-mail</label>
                                                        <input type="email" disabled className="form-control" id="Email" name="Email" placeholder="E-mail" value="naruto_uzumaki@konoha.com" />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-8">
                                                        <label htmlFor="Street">Rua</label>
                                                        <input type="text" className="form-control" id="Street" name="Number" placeholder="Rua" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="Number">Número</label>
                                                        <input type="text" className="form-control" id="Number" name="Number" placeholder="Número" />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="neighborhood">Bairro</label>
                                                        <input type="text" className="form-control" id="Neighborhood" name="Neighborhood" placeholder="Bairro" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="City">Cidade</label>
                                                        <input type="text" className="form-control" id="City" name="City" placeholder="Cidade" />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="State">Estado</label>
                                                        <input type="text" className="form-control" id="State" name="State" placeholder="Estado" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="Country">País</label>
                                                        <input type="text" className="form-control" id="Country" name="Country" placeholder="País" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="ZipCode">CEP</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="ZipCode" name="ZipCode" />
                                                            <div className="input-group-append">
                                                                <button className="btn btn-primary"><i className="material-icons">search</i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="Description">Sobre</label>
                                                        <textarea className="form-control" name="Description" rows={5} />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-12 text-right">
                                                        <button type="submit" className="btn btn-accent"><i className="material-icons">save</i> Atualizar Conta</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
