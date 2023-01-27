import React from 'react';
import { Container, Button, UncontrolledCollapse, Card, CardBody, Col, Row, Table } from 'reactstrap';
import './tabelasProdutos.css'

class TabelasProdutos extends React.Component {


    render() {
        return (
            <Container className="containerTP" fluid>
                <Row>
                    <Col sm="8"></Col>
                    <Col>
                        <Button color="primary" id="toggler" style={{marginBottom: '1rem'}}>Toggle</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <UncontrolledCollapse toggler="#toggler">
                            <Table borderless>
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </UncontrolledCollapse>
                    </Col>
                    <Col sm="1"></Col>
                </Row>
            </Container>
        )
    }
}

export default TabelasProdutos;