import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Botao from '../../componentes/Botao/Botao';

import style from './gerenciamento.module.css';

class Gerenciamento extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <Container fluid className={`${style.container} `}>
                <Row className='vh-100 justify-content-center'>
                    <Row className='align-items-center justify-content-center'>
                        <Col className={`${style.titles} col-12 col-md-4 text-center`}>
                            <p className='fs-1 fw-semibold'>Bem-Vindo</p>
                            <p className='fs-4 fw-semibold'>Administrador</p>
                        </Col>
                    </Row>
                    <Row className={`${style.buttons} align-items-center justify-content-center`}>
                        <Row className='justify-content-center'>
                            <Col className={` col-11  col-md-4 col-lg-4 col-xl-4 col-xxl-2`}>
                                <Botao title="Adicionar Item" color="#fff" bgColor="#18A077" />
                            </Col>
                            <Col className={` col-11 col-md-4 col-lg-4 col-xl-4 col-xxl-2 my-4 my-md-0`}>
                                <Botao title="Remover Item" color="#fff" bgColor="#FA4F4F" />
                            </Col>
                            <Col className={` col-11  col-md-4 col-lg-4 col-xl-4 col-xxl-2`}>
                                <Botao title="Atualizar Item" color="#fff" bgColor="#18A077" />
                            </Col>
                        </Row>
                    </Row>
                </Row>
            </Container>
        )
    }
}

export default Gerenciamento;