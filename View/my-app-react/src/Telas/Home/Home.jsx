import React from 'react';

import CarrosselHome from '../../componentes/CarrosselHome/CarrosselHome';
import ListaRotulos from '../../componentes/ListaRotulos/ListaRotulos';
import SobreHome from '../../componentes/SobreHome/SobreHome';
import CardHome from '../../componentes/CardHome/CardHome';


class Home extends React.Component {


    render() {
        return (
              <div>
                <CarrosselHome></CarrosselHome>
                <SobreHome></SobreHome>
                <ListaRotulos></ListaRotulos>
                <CardHome></CardHome>
              </div>
        )
    }
}

export default Home;