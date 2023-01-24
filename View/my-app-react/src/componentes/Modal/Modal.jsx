import React from 'react';

import { Col, Row } from 'reactstrap'
import { IoMdCloseCircle } from 'react-icons/io'
import style from './modal.module.css'

import ModdalContext from '../../Contexts/modalContext'

class Modal extends React.Component {

    constructor(props) {
        super(props)
        this.props.bgColor;
        this.props.color;
        this.props.classModal;
        this.props.id;
    }

    render() {

        return (
            <Row id={this.props.id} className={`${this.context.display ? style.modal : style.modalDisable} justify-content-center `}>
                <Col className={`${style.modalCard} ${this.props.classModal}`} style={{ background: `${this.props.bgColor}`, color: `${this.props.color}` }}>
                    <div className={style.closeButton}>
                        <button onClick={this.context.displayNone}>
                            <IoMdCloseCircle fill="true" size={25} />
                        </button>
                    </div>
                    <p>Login ou senha estão incorretos. Caso persista você pode não conter permissão ou acesso a esta página entre em contato com os responsáveis.</p>
                </Col>
            </Row>
        )
    }
}
Modal.contextType = ModdalContext
export default Modal