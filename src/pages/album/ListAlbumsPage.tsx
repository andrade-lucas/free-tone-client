import React from 'react';
import PageHeader from '../../components/PageHeader';
import AlbumComponent from '../../components/AlbumComponent';

interface IProps {
}

export default class ListAlbumsPage extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-12 col-sm-12 mb-12">
                <PageHeader title="Meus Álbuns" subtitle="FreeTone" link="" />

                <div className="card card-small">
                    <div className="card-body d-flex">
                        <div className="row row-cols-1 row-cols-md-3">
                            <AlbumComponent id="1" title="Gun's'Roses" image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/2/2/b/6/524521470234743-tb_180.jpg" />
                            <AlbumComponent id="1" title="Gun's'Roses" image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/2/2/b/6/524521470234743-tb_180.jpg" />
                            <AlbumComponent id="1" title="Gun's'Roses" image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/2/2/b/6/524521470234743-tb_180.jpg" />
                            <AlbumComponent id="1" title="Gun's'Roses" image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/2/2/b/6/524521470234743-tb_180.jpg" />
                            <AlbumComponent id="1" title="Gun's'Roses" image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/2/2/b/6/524521470234743-tb_180.jpg" />
                            <AlbumComponent id="1" title="Gun's'Roses" image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/2/2/b/6/524521470234743-tb_180.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
