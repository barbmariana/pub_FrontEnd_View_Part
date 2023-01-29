import React from 'react';

import CarrosselHome from '../../componentes/CarrosselHome/CarrosselHome';


class Home extends React.Component {


    render() {
        return (
            <CarrosselHome text-danger={['Pub Blinders', 'Produtos', 'Eventos']}></CarrosselHome>
        )
    }
}

export default Home;