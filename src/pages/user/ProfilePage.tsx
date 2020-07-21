import React from 'react';
import { UserProfile } from '../../models/user-profile.model';
import PageHeader from '../../components/PageHeader';
import UserProfileInfo from '../../components/UserProfileInfo';
import UserProfileForm from '../../components/UserProfileForm';
import { CepService } from '../../services/cep.service';

interface IProps {
}

interface IState {
    isBusy: boolean;
    user: UserProfile | any;
}

export default class ProfilePage extends React.Component<IProps, IState> {
    constructor(props: IProps, private cepService: CepService) {
        super(props);
        this.state = {
            isBusy: false,
            user: null
        };
    }

    render() {
        return (
            <div>
                <PageHeader title="Meu Perfil" subtitle="FreeTone" link="" />

                <div className="row">
                    <UserProfileInfo />
                    <UserProfileForm />
                </div>
            </div>
        );
    }
}
