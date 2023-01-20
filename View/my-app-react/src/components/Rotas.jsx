import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './Home'


class Rotas extends React.Component{

    render(){
       return <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/produtos' element={<Home></Home>}></Route>
                <Route path='/eventos' element={<Home></Home>}></Route>
                <Route path='/contato' element={<Home></Home>}></Route>
                <Route path='/reserva' element={<Home></Home>}></Route>
            </Routes>
        </BrowserRouter>
    }
};

export default Rotas;