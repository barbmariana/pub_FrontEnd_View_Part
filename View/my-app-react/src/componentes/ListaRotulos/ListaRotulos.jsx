import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import style from '../ListaRotulos/ListaRotulos.module.css';
import imgLabels from '../../assets/images/labels.jpg'


const ListaRotulos = ()=>{
    return <Container fluid  className={style.caixaRotulos}>
            <img src={imgLabels} alt="" />
    </Container>
}

export default ListaRotulos