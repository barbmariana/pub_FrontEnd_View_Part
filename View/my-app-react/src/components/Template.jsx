import React from 'react';
import {Container} from 'reactstrap';
import Navbar from '../components/Navbar'


class Template extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <Container fluid>
            <Navbar></Navbar>
        </Container>
    }
};

export default Template;

