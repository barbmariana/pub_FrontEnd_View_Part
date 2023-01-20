import React from "react";
import {Container} from 'reactstrap';
import Navbar from '../Navbar/NavBar';
import Footer from '../Footer/Footer'


class Template extends React.Component{

    render(){
       return <Container fluid>
            <Navbar></Navbar>
            <div>Conteúdo da Página</div>
            <Footer></Footer>
        </Container>
    }
}

export default Template