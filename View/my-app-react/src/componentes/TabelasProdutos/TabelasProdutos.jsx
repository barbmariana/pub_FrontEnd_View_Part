import { Container, Button, UncontrolledCollapse, Col, Row, Table } from 'reactstrap';
import React, {useEffect, useState} from 'react';
import './tabelasProdutos.css'
import api from '../../Api/Api';


export default function TabelasProdutos (categoria) {
    const [produtos, setProduto] = useState();

    useEffect(() => {
        api.get('Whiskys')
        .then((res) => setProduto(res.data))
        .catch((err) => console.log(err));
    }, []);
    
    console.log(categoria.toString())
    
    return (
        <Container className="containerTP" fluid>
            <Row className={`justify-content-center `}>
                <Col xxl="10" xs="12">
                    <Button className="btnTable" color="primary" id="as" style={{marginBottom: '1rem'}}>Menu</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <UncontrolledCollapse toggler="#as">
                        <Table borderless>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Idade</th>
                                    <th>Tamanho</th>
                                    <th>Estilo</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                        {produtos?.map((produto) => (
                            <tbody key={produto.id}>
                                <tr>
                                    <td>{produto.Nome}</td>
                                    <td>{produto.Idade} anos</td>
                                    <td>{produto.Tamanho}</td>
                                    <td>{produto.Estilo}</td>
                                    <td>{produto.Preço},00</td>
                                </tr>
                            </tbody>
                        ))}
                        </Table>
                    </UncontrolledCollapse>
                </Col>
            </Row>
        </Container>
    )
}