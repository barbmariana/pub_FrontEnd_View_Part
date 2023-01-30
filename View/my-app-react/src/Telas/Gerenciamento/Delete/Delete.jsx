import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Col, Container, Input, Row, Form, FormGroup } from 'reactstrap'
import Botao from '../../../componentes/Botao/Botao';
import { BsFillBackspaceFill } from 'react-icons/bs'

import axios from 'axios';

import style from './Delete.module.css'

class Delete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: undefined,
            option: "Whiskys"
        }
        this.Back = this.Back.bind(this)
        this.Verificacao = this.Verificacao.bind(this)
        this.changeOption = this.changeOption.bind(this)

    }

    changeOption(e) {
        this.setState({ option: e.target.value })
    }

    Back() {
        setTimeout(() => {
            this.props.navigate("/administrador/private/gerenciamento/")
        }, 200)
    }

    Verificacao() {
        if (!isNaN(this.state.id)) {
            switch (this.state.option) {
                case "Outras Bebidas":
                    axios.delete(`https://pubresiliajson.onrender.com/OutrasBebidas/${this.state.id}`).
                        then(() => {
                            alert(`${this.state.option} deletado/a com sucesso`)
                            this.Back()
                        }).catch((error) => {
                            alert(`Algo deu errado insira um id valido ou contate o adm master \n ${error}`)
                            this.Back()
                        })
                    break;

                default:
                    axios.delete(`https://pubresiliajson.onrender.com/${this.state.option}/${this.state.id}`).
                        then(() => {
                            alert(`${this.state.option} deletado/a com sucesso`)
                            this.Back()
                        }).catch((error) => {
                            alert(`Algo deu errado insira um id valido ou contate o adm master \n ${error}`)
                            this.Back()
                        })
                    break;
            }
        }
        else {
            alert("Digite um numero de id valído");
        }
    }

    render() {
        return (
            <Container fluid className={style.container}>
                <Row className='justify-content-start'>
                    <Col xxl={2} xs={2} className={`${style.colButtonBack} my-2`}>
                        <button onClick={this.Back}><BsFillBackspaceFill /></button>
                    </Col>
                </Row>
                <Row className='text-center'>
                    <Col className={`${style.colH1} my-5`}>
                        <h1>Delete o item</h1>
                    </Col>
                </Row>
                <Row >
                    <Col className='col-xxl-12'>
                        <Form className="was-validated">
                            <FormGroup>
                                <Row className='justify-content-center'>
                                    <Col xxl={4} md={6}>
                                        <Col xs={12} xxl={12} md={12}>
                                            <Input className={`${style.InputSelect} my-3`}
                                                type='select' name='select'
                                                onChange={this.changeOption}
                                            >
                                                <option>Whiskys</option>
                                                <option>Comidas</option>
                                                <option>Charutos</option>
                                                <option>Outras Bebidas</option>
                                                <option>Drinks</option>
                                                <option>Cigarros</option>
                                            </Input>

                                        </Col>
                                        <Input className={`${style.Input}`} type="text"
                                            onChange={(e) => { this.setState({ id: parseInt(e.target.value) }) }}
                                        >

                                        </Input>
                                        <Col xs={12} xxl={12} className='my-5'>
                                            <Botao title="Confirmar" bgColor="#18A078" color="#fff" onClick={this.Verificacao} />
                                        </Col>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>

            </Container >
        )
    }
}
export default function RouterDelete(props) {
    const navigate = useNavigate()
    return (
        <Delete navigate={navigate}></Delete>
    )
}