import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Telas/Home/Home';
import Eventos from '../Telas/Eventos/Evento';
import Template from '../componentes/Template/Template';



class Rotas extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Template>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/eventos' element={<Eventos />} />
                    </Routes>
                </Template>
            </BrowserRouter>
        )
    }
}

export default Rotas