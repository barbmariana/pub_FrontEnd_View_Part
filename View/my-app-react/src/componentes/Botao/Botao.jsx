import React from 'react';

import style from './botao.module.css'

class Botao extends React.Component {
    constructor(props) {
        super(props)
        this.props.bgColor
        this.props.title
        this.props.color
        this.props.borderRadius
        this.props.onClick
    }


    render() {
        return (
            <button type='button' className={style.botao} onClick={this.props.onClick}
                style={{
                    background: `${this.props.bgColor}`,
                    color: `${this.props.color}`,
                    borderRadius: `${this.props.borderRadius}`
                }}
            >
                {this.props.title}
            </button>
        )
    }

}

export default Botao