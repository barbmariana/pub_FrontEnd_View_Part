import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Telas/Home/Home';
import Eventos from '../Telas/Eventos/Evento';
import Reserva from '../Telas/Reserva/Reserva'
import Template from '../componentes/Template/Template';
import Produtos from '../Telas/Produtos/Pordutos';

import RouterAdministrador from '../Telas/Administrador/Administrador';
import Contatos from '../Telas/Contatos/Contatos';
import Gerenciamento from '../Telas/Gerenciamento/Gerenciamento';
import RouterCreate from '../Telas/Gerenciamento/Create/Create';
import RouterDelete from '../Telas/Gerenciamento/Delete/Delete';
import RouterUpdate from '../Telas/Gerenciamento/Update/Update';



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
                        <Route path='/administrador/private/gerenciamento/create' element={<RouterCreate />} />
                        <Route path='/administrador/private/gerenciamento/delete' element={<RouterDelete />} />
                        <Route path='/administrador/private/gerenciamento/update' element={<RouterUpdate />} />
                        <Route path='/contato' element={<Contatos/>}/>
                        <Route path='/reserva' element={<Reserva/>}/>

                    </Routes>
                </Template>
            </BrowserRouter>
        )
    }
}

export default Rotas