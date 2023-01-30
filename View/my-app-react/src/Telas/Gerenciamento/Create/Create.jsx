import React from 'react';
import { BsFillBackspaceFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Col, Container, Input, Row, Form, FormGroup } from 'reactstrap'
import Botao from '../../../componentes/Botao/Botao';
import axios from 'axios';
import style from './Create.module.css'


class Create extends React.Component {
    constructor(props) {
        super(props)

        this.arrayWhiskys = 7
        this.arrayComidas = 4
        this.arrayCharutos = 4
        this.arrayOutrasBebidas = 4
        this.arrayDrinks = 5
        this.arrayOutrasCigarros = 5
        this.arrayBody = []
        this.state = {
            option: "Whiskys",
            inputValid: true
        }

        this.Back = this.Back.bind(this)
        this.changeOption = this.changeOption.bind(this)
        this.Verificacao = this.Verificacao.bind(this)
    }
    Back() {
        setTimeout(() => {
            this.props.navigate("/administrador/private/gerenciamento/")
        }, 200)
    }
    changeOption(e) {
        this.arrayBody = []
        this.setState({ option: e.target.value })
    }


    Verificacao() {
        if (this.state.option == "Whiskys" && this.arrayBody.length < this.arrayWhiskys) {
            alert("Preencha todos os campos")
        }
        else if (this.state.option == "Comidas" && this.arrayBody.length < this.arrayComidas) {
            alert("Preencha todos os campos")
        }
        else if (this.state.option == "Charutos" && this.arrayBody.length < this.arrayCharutos) {
            alert("Preencha todos os campos")
        }
        else if (this.state.option == "OutrasBebidas" && this.arrayBody.length < this.arrayOutrasBebidas) {
            alert("Preencha todos os campos")
        }
        else if (this.state.option == "Drinks" && this.arrayBody.length < this.arrayDrinks) {
            alert("Preencha todos os campos")
        }
        else if (this.state.option == "Cigarros" && this.arrayBody.length < this.arrayCigarros) {
            alert("Preencha todos os campos")
        }
        else {
            switch (this.state.option) {
                case "Whiskys":

                    axios.post(`https://pubresiliajson.onrender.com/${this.state.option}`, {
                        "Nome": this.arrayBody[0],
                        "Idade": this.arrayBody[1],
                        "Origem": this.arrayBody[2],
                        "Foto": this.arrayBody[3],
                        "Preço": this.arrayBody[4],
                        "Tamanho": this.arrayBody[5],
                        "Estilo": this.arrayBody[6]
                    }).then(() => {
                        alert("Whisky criado com sucesso")
                        this.Back()
                    }).catch((error) => {
                        alert(`Algo deu Errado ${error}`)
                        this.Back()
                    })
                    break;

                case "Comidas":
                    axios.post(`https://pubresiliajson.onrender.com/${this.state.option}`, {
                        "Nome": this.arrayBody[0],
                        "Sobre": this.arrayBody[1],
                        "Preço": this.arrayBody[2],
                        "Foto": this.arrayBody[3],
                    }).then(() => {
                        alert("Comida criada com sucesso")
                        this.Back()
                    }).catch((error) => {
                        alert(`Algo deu Errado ${error}`)
                        this.Back()
                    })
                    break;

                case "Charutos":
                    axios.post(`https://pubresiliajson.onrender.com/${this.state.option}`, {
                        "Nome": this.arrayBody[0],
                        "Origem": this.arrayBody[1],
                        "Força": this.arrayBody[2],
                        "Preço": this.arrayBody[3]
                    }).then(() => {
                        alert("Charuto criado com sucesso")
                        this.Back()
                    }).catch((error) => {
                        alert(`Algo deu Errado ${error}`)
                        this.Back()
                    })
                    break;

                case "Outras Bebidas":
                    axios.post(`https://pubresiliajson.onrender.com/OutrasBebidas`, {
                        "Nome": this.arrayBody[0],
                        "Foto": this.arrayBody[1],
                        "Preço": this.arrayBody[2],
                        "Tamanho": this.arrayBody[3]
                    }).then(() => {
                        alert("OutraBebida criada com sucesso")
                        this.Back()
                    }).catch((error) => {
                        alert(`Algo deu Errado ${error}`)
                        this.Back()
                    })
                    break;

                case "Drinks":

                    axios.post(`https://pubresiliajson.onrender.com/${this.state.option}`, {
                        "name": this.arrayBody[0],
                        "unit": this.arrayBody[1],
                        "description": this.arrayBody[2],
                        "amount": this.arrayBody[3],
                        "price": this.arrayBody[4]
                    }).then(() => {
                        alert("Drink criado com sucesso")
                        this.Back()
                    }).catch((error) => {
                        alert(`Algo deu Errado ${error}`)
                        this.Back()
                    })
                    break;

                case "Cigarros":
                    axios.post(`https://pubresiliajson.onrender.com/${this.state.option}`, {
                        "tipo": this.arrayBody[0],
                        "descricao": this.arrayBody[1],
                        "versao": this.arrayBody[2],
                        "preco": this.arrayBody[3],
                        "estoque": this.arrayBody[4]
                    }).then(() => {
                        alert("Cigarro criado com sucesso")
                        this.Back()
                    }).catch((error) => {
                        alert(`Algo deu Errado ${error}`)
                        this.Back()
                    })
                    break;

                default:
                    alert("Algo deu errado")
                    break;
            }

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
                                                    <Input id="0" required className={`${style.Input} my-3`} type="text" placeholder="Nome"
                                                        onBlur=
                                                        {(e) => {

                                                            if (e.target.value != "") {
                                                                this.arrayBody[0] = e.target.value

                                                            }

                                                        }}>
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
function RouterCreate(props) {
    const navigate = useNavigate()
    return (
        <Create navigate={navigate}></Create>
    )
}
export default RouterCreate;