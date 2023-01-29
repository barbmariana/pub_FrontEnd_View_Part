import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Telas/Home/Home';
import Eventos from '../Telas/Eventos/Evento';
import Reserva from '../Telas/Reserva/Reserva'
import Template from '../componentes/Template/Template';
import Produtos from '../Telas/Produtos/Pordutos';
import Administrador from '../Telas/Administrador/Administrador';
import Contatos from '../Telas/Contatos/Contatos';



class Rotas extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Template>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/eventos' element={<Eventos />} />
                        <Route path='/produtos' element={<Produtos />} />
                        <Route path='/contato' element={<Contatos/>}/>
                        <Route path='/reserva' element={<Reserva/>}/>
                        <Route path='/administrador/private' element={<Administrador />} />
                    </Routes>
                </Template>
            </BrowserRouter>
        )
    }
}

export default Rotas