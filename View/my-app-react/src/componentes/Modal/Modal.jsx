import React from 'react';

import { Col, Row } from 'reactstrap'

import style from './modal.module.css'

class Modal extends React.Component {

    constructor(props) {
        super(props)
        this.props.bgColor;
        this.props.color;
        this.props.classModal;
        this.props.id;
        this.props.display;
    }

    render() {
        return (
            <Row id={this.props.id} className={`${this.props.display ? style.modal : style.modalDisable} justify-content-center `}>
                <Col className={`${style.modalCard} ${this.props.classModal}`} style={{ background: `${this.props.bgColor}`, color: `${this.props.color}` }}>
                    <p>Login ou senha estão incorretos. Caso persista você pode não conter permissão ou acesso a esta página entre em contato com os responsáveis.</p>
                </Col>
            </Row>
        )
    }
}

export default Modal