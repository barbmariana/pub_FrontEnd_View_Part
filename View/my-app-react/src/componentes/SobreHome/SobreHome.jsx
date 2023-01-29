import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import style from '../SobreHome/SobreHome.module.css'


const SobreHome = ()=>{

    return (<Container fluid  className={style.caixaSobre}>
        <Row>
            <Col className={style.caixaSobreTexto}>
            <h2>Sobre Nosso Pub</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam atque quas, eos, voluptates velit aspernatur placeat ullam ex voluptatibus inventore, omnis sint delectus dicta corrupti porro. Soluta possimus quasi numquam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam atque quas, eos, voluptates velit aspernatur placeat ullam ex voluptatibus inventore, omnis sint delectus dicta corrupti porro. Soluta possimus quasi numquam?</p>
            </Col>
            <Col className={style.caixaSobreBotao}>
            <Button className={style.botaoReserva}>Faça sua Reserva</Button>
            </Col>
        </Row>
    </Container>)
}

export default SobreHome