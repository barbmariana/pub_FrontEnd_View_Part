import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillBackspaceFill } from 'react-icons/bs'
import { Col, Container, Input, Row, Form, FormGroup } from 'reactstrap'
import Botao from '../../../componentes/Botao/Botao';
import style from './Update.module.css'

import axios from 'axios'



class Update extends React.Component {
    constructor() {
        super()


        this.state = {
            option: "Whiskys",
            id: null,
            data: {}

        }
        this.BuscarId = this.BuscarId.bind(this)
    }

    BuscarId(id) {
        axios.get(`https://pubresiliajson.onrender.com/${this.state.option}/${id}`).
            then((res) => {
                this.setState({ data: res.data })
                console.log(this.state.data);
                document.getElementById("WhiskysNome").value = this.state.data.Nome
            }).catch((error) => {
                console.log(error);
            })


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
                        <h1>Adicionar Item</h1>
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
                                            {
                                                this.state.option == "Whiskys" &&
                                                <>
                                                    <Row className='align-items-center'>
                                                        <Col xxl={10}>
                                                            <Input required className={`${style.Input} my-3`} type="text" placeholder="Digite o 'id' de busca"
                                                                onChange={(e) => {
                                                                    this.setState({ id: e.target.value })
                                                                }}
                                                            >
                                                            </Input>
                                                        </Col>
                                                        <Col xxl={2}>
                                                            <Botao title="Buscar" bgColor="#18A078" color="#fff" onClick={() => {
                                                                this.BuscarId(this.state.id)
                                                            }} />
                                                        </Col>
                                                    </Row>
                                                    <Input id="WhiskysNome" required className={`${style.Input} my-3`} type="text" placeholder="Nome"
                                                    >
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input required className={`${style.Input} my-3`} type="text" placeholder="Idade"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[1] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input required className={`${style.Input} my-3`} type="text" placeholder="Origem"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[2] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input required className={`${style.Input} my-3`} type="text" placeholder="Foto"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[3] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input required className={`${style.Input} my-3`} type="number" placeholder="Preço"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[4] = parseFloat(e.target.value)

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input required className={`${style.Input} my-3`} type="text" placeholder="Tamanho"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[5] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input required className={`${style.Input} my-3`} type="text" placeholder="Estilo"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[6] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                </>

                                                ||

                                                this.state.option == "Comidas" &&
                                                <>
                                                    <Input id="1" required className={`${style.Input} my-3`} type="text" placeholder="Nome"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[0] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input required className={`${style.Input} my-3`} type="text" placeholder="Sobre"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[1] = e.target.value

                                                            }
                                                        }}
                                                    >
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input required className={`${style.Input} my-3`} type="number" placeholder="Preço"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[2] = parseFloat(e.target.value)

                                                            }
                                                            else {

                                                            }
                                                        }}
                                                    >
                                                    </Input>

                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input required className={`${style.Input} my-3`} type="text" placeholder="Foto"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[3] = e.target.value

                                                            }
                                                            else {
                                                                this.setState({ inputValid: false })
                                                            }
                                                        }}
                                                    >

                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                </>

                                                ||

                                                this.state.option == "Charutos" &&
                                                <>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Nome" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[0] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Origem"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[1] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Força"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[2] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Preço"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[3] = parseFloat(e.target.value)

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                </>
                                                ||

                                                this.state.option == "Outras Bebidas" &&
                                                <>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Nome"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[0] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Foto"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[1] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input className={`${style.Input} my-3`} type="number" placeholder="Preço"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[2] = parseFloat(e.target.value)

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Tamanho"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[3] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>

                                                </>
                                                ||

                                                this.state.option == "Drinks" &&
                                                <>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Nome" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[0] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Unidade/s" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[1] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Descrição" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[2] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Quantidade" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[3] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Preço" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[4] = parseFloat(e.target.value)

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                </>
                                                ||

                                                this.state.option == "Cigarros" &&
                                                <>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Tipo" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[0] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Descrição" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[1] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Versão" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[2] = e.target.value

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Preço" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[3] = parseFloat(e.target.value)

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                    <Input className={`${style.Input} my-3`} type="text" placeholder="Estoque" onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[4] = parseFloat(e.target.value)

                                                            }

                                                        }}>
                                                    </Input>
                                                    <div className="invalid-feedback">Campos Obrigatórios</div>
                                                </>
                                            }

                                        </Col>
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
export default function RouterUpdate() {
    const navigate = useNavigate()
    return (
        <Update navigate={navigate}></Update>
    )
}