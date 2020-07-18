import React from 'react';

interface IProps {
}

export default class ListAlbumsPage extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Listar álbuns cadastrados!</h1>
            </div>
        );
    }
}
