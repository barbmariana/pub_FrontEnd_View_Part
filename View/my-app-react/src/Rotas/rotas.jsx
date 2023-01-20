import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Telas/Home/Home';
import Eventos from '../Telas/Eventos/Evento';



class Rotas extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/eventos' element={<Eventos />}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Rotas