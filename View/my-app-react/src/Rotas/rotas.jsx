import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Telas/Home/Home';
import Eventos from '../Telas/Eventos/Evento';
import Template from '../componentes/Template/Template';
import Produtos from '../Telas/Produtos/Pordutos';
import RouterAdministrador from '../Telas/Administrador/Administrador';
import Gerenciamento from '../Telas/Gerenciamento/Gerenciamento';



class Rotas extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Template>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/eventos' element={<Eventos />} />
                        <Route path='/produtos' element={<Produtos />} />
                        <Route path='/administrador/private' element={<RouterAdministrador />} />
                        <Route path='/administrador/private/gerenciamento' element={<Gerenciamento />} />
                    </Routes>
                </Template>
            </BrowserRouter>
        )
    }
}

export default Rotas