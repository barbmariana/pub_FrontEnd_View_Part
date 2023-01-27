import React, {useEffect, useState} from 'react';
import './autoColapsar.css';
import { Container, Row, Col } from 'reactstrap';
import TabelaProdutos from '../TabelasProdutos/TabelasProdutos';
import img from '../../assets/images/whisky.jpg';
import api from '../../Api/Api';

export default function AutoColapsar () {
        const [produtos, setProdutos] = useState();

        useEffect(() => {
            api.get("games")
            .then((res) => setProdutos(res.data))
            .catch((err) => console.log(err));
        }, []);

        return (
            <Container className="containerAC" fluid>
                {produtos?.map((produto) => (
                    <Row className='Whiskys' key={produto.id}>
                        {console.log(produto)}
                        <Row className='slideRight'>
                            <Col sm={{offset: 3, order: 2, size: 6}}>
                                <img src={img} className='img-E ' alt="Whisky 1"/>
                                {/* <h1>{produto.id}</h1> */}
                            </Col>
                        </Row>
                        <Row className='slideLeft'>
                            <Col sm={{offset: 2, order: 2, size:8}}>
                                <TabelaProdutos></TabelaProdutos>
                            </Col>
                        </Row>
                    </Row>
                ))}
              </Container>
        )
    }