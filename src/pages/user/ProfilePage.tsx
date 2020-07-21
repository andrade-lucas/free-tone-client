import React from 'react';
import { UserProfile } from '../../models/user-profile.model';

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

    render() {
        return (
            <h3>Perfil de usuário</h3>
        );
    }
}
