import React from 'react';
import CarrosselHome from '../../componentes/CarrosselHome/CarrosselHome';
import ListaRotulos from '../../componentes/ListaRotulos/ListaRotulos';
import SobreHome from '../../componentes/SobreHome/SobreHome';


class Home extends React.Component {


    render() {
        return (
              <div>
                <CarrosselHome text-danger={['Pub Blinders', 'Produtos', 'Eventos']}></CarrosselHome>
                <SobreHome></SobreHome>
                <ListaRotulos></ListaRotulos>
              </div>
        )
    }
}

export default Home;