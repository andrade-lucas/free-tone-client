import React from 'react';

interface IProps {
    title: string,
    subtitle: string
}

const PageHeader = (props: IProps) => (
    <div className="page-header row no-gutters py-4">
        <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span className="text-uppercase page-subtitle">{props.subtitle}</span>
            <h3 className="page-title">{props.title}</h3>
        </div>
    </div>
);

export default PageHeader;