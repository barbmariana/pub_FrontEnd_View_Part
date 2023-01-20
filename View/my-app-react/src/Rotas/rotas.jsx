import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Telas/Home/Home';
import Navbar from '../componentes/Navbar/NavBar';
import Eventos from '../Telas/Eventos/Evento';
import Footer from '../componentes/Footer/Footer';
class Rotas extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/eventos' element={<Eventos />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default Rotas