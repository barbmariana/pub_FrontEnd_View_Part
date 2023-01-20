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
                <Route></Route>
                <Route></Route>
            </Routes>
        </BrowserRouter>
    }
};

export default Rotas;