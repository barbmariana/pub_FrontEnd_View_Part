import React from 'react';
import './autoColapsar.css'
import { Container, Row, Col } from 'reactstrap';
import TabelaProdutos from '../TabelasProdutos/TabelasProdutos';

class AutoColapsar extends React.Component {


    render() {
        return (
              <Container fluid>
                <Row className='Whiskys'>
                    <Row className='slideRight'>
                        <Col sm={{offset: 3, order: 2, size: 6}}>
                            <img src="#" className='img-E' alt="Whisky 1" />
                        </Col>
                    </Row>
                    <Row className='slideLeft'>
                        <Col sm={{offset: 8, order: 2, size: 6}}>
                            <img src="#" className='img-D' alt="whisky 2" />
                        </Col>
                    </Row>
                    <Row className='fadeIn'>
                        <Col sm={{offset: 5, order: 2, size: 6}}>
                            <TabelaProdutos></TabelaProdutos>
                        </Col>
                    </Row>
                </Row>
                <Row className='Tequilas'>
                    <Row className='slideRight'>
                        <Col sm={{offset: 3, order: 2, size: 6}}>
                            <img src="#" className='img-E' alt="Tequila 1" />
                        </Col>
                    </Row>
                    <Row className='slideLeft'>
                        <Col sm={{offset: 8, order: 2, size: 6}}>
                            <img src="#" className='img-D' alt="Tequila 2" />
                        </Col>
                    </Row>
                    <Row className='fadeIn'>
                        <Col sm={{offset: 5, order: 2, size: 6}}>
                            <TabelaProdutos></TabelaProdutos>
                        </Col>
                    </Row>
                </Row>
                <Row className='Cervejas'>
                    <Row className='slideRight'>
                        <Col sm={{offset: 3, order: 2, size: 6}}>
                            <img src="#" className='img-E' alt="Cerveja 1" />
                        </Col>
                    </Row>
                    <Row className='slideLeft'>
                        <Col sm={{offset: 8, order: 2, size: 6}}>
                            <img src="#" className='img-D' alt="Cerveja 2" />
                        </Col>
                    </Row>
                    <Row className='fadeIn'>
                        <Col sm={{offset: 5, order: 2, size: 6}}>
                            <TabelaProdutos></TabelaProdutos>
                        </Col>
                    </Row>
                </Row>
                <Row className='Charutos'>
                    <Row className='slideRight'>
                        <Col sm={{offset: 3, order: 2, size: 6}}>
                            <img src="#" className='img-E' alt="Charuto 1" />
                        </Col>
                    </Row>
                    <Row className='slideLeft'>
                        <Col sm={{offset: 8, order: 2, size: 6}}>
                            <img src="#" className='img-D' alt="Charuto 2" />
                        </Col>
                    </Row>
                    <Row className='fadeIn'>
                        <Col sm={{offset: 5, order: 2, size: 6}}>
                            <TabelaProdutos></TabelaProdutos>
                        </Col>
                    </Row>
                </Row>
                <Row className='Cigarros'>
                    <Row className='slideRight'>
                        <Col sm={{offset: 3, order: 2, size: 6}}>
                            <img src="#" className='img-E' alt="Cigarro 1" />
                        </Col>
                    </Row>
                    <Row className='slideLeft'>
                        <Col sm={{offset: 8, order: 2, size: 6}}>
                            <img src="#" className='img-D' alt="Cigarro 2" />
                        </Col>
                    </Row>
                    <Row className='fadeIn'>
                        <Col sm={{offset: 5, order: 2, size: 6}}>
                            <TabelaProdutos></TabelaProdutos>
                        </Col>
                    </Row>
                </Row>
                <Row className='Whiskys'>
                    <Row className='slideRight'>
                        <Col sm={{offset: 3, order: 2, size: 6}}>
                            <img src="#" className='img-E' alt="Whisky 1" />
                        </Col>
                    </Row>
                    <Row className='slideLeft'>
                        <Col sm={{offset: 8, order: 2, size: 6}}>
                            <img src="#" className='img-D' alt="whisky 2" />
                        </Col>
                    </Row>
                    <Row className='fadeIn'>
                        <Col sm={{offset: 5, order: 2, size: 6}}>
                            <TabelaProdutos></TabelaProdutos>
                        </Col>
                    </Row>
                </Row>
              </Container>
        )
    }
}

export default AutoColapsar;