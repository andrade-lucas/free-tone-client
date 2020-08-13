import React from 'react';

const AboutPage = () => {
    return (
        <div className="col-md-12 col-sm-12 mb-12">
            <div className="card card-small">
                <div className="card-body d-flex">
                    <div className="row row-cols-1 row-cols-md-3">
                        <h4>Quem somos?</h4>
                        <hr />

                        <p className="text-center">
                            O Freetone é formado por amigos, estudantes de tecnologia da informação, engenharia e
                            publicidade, que gostam de música e que passam muito tempo na internet. O coryright é
                            um problema recorrente para quem trabalha produzindo conteúdo na internet, pensando em
                            como deixar esse trabalho mais tranquilo, oferecemos um sistema que agrega músicas sem
                            direitos autorais, em uma plataforma pessoal e interativa, que agiliza e facilita a vida
                            dos criadores de conteúdo digital.
                        </p>

                        <div className="row">
                            <div className="card bg-light mb-3 col-md-4" style={{ maxWidth: '18rem' }}>
                                <div className="card-header">Missão</div>
                                <div className="card-body">
                                    <p className="card-text">Otimizar o processo de criação dos nossos usuários.</p>
                                </div>
                            </div>

                            <div className="card bg-light mb-3 col-md-4" style={{ maxWidth: '18rem' }}>
                                <div className="card-header">Visão</div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Popularizar o nosso projeto enquanto contribuímos na construção
                                        de uma comunidade que ajude a melhorar a experiência dos criadores
                                        de conteúdo para a internet.
                                    </p>
                                </div>
                            </div>

                            <div className="card bg-light mb-3 col-md-4" style={{ maxWidth: '18rem' }}>
                                <div className="card-header">Valores</div>
                                <div className="card-body">
                                    <p className="card-text">
                                        <p>Comunidade</p>
                                        <p>Inovação</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;