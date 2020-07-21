import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    title: string,
    subtitle: string,
    link: string
}

export default class PageHeader extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.handleLinkButton = this.handleLinkButton.bind(this);
    }

    handleLinkButton = (link: string) => {
        if (link !== null && link.length > 0) {
            return (
                <div className="col-12 col-sm-8 text-right">
                    <h3>
                        <Link to={link} className="btn btn-outline-primary">
                            <i className="material-icons">chevron_left</i> Voltar para Lista
                        </Link>
                    </h3>
                </div>
            );
        }
        return null;
    }
    
    render() {
        const { title, subtitle, link } = this.props;
        return (
            <div className="page-header row no-gutters py-4">
                <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                    <span className="text-uppercase page-subtitle">{subtitle}</span>
                    <h3 className="page-title">{title}</h3>
                </div>
                {this.handleLinkButton(link)}
            </div>
        );
    }
}