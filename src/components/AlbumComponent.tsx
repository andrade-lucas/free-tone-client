import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    id: string;
    image: string;
    title: string;
}

const AlbumComponent = ({ id, image, title }: IProps) => {
    return (
        <Link to={'/'} className="col-md-3 col-sm-12" style={{marginBottom: 20}}>
            <div className="card h-100">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                </div>
            </div>
        </Link>
    );
}

export default AlbumComponent;