import React from 'react';
import PageHeader from '../../components/PageHeader';
import SongsListComponent from '../../components/SongsListComponent';
import AlbumDetailComponent from '../../components/AlbumDetailComponent';

export default class AlbumDetailPage extends React.Component {
    render() {
        return (
            <div>
                <PageHeader title="Gun'n'Roses" subtitle="FreeTone" link="/albums" />

                <div className="row">
                    <AlbumDetailComponent />
                    <SongsListComponent />
                </div>
            </div>
        );
    }
}
