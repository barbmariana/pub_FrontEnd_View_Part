import React, { createContext } from 'react';

const ModalContext = createContext({})

export class ModalContextProvider extends React.Component {
    constructor() {
        super()
        this.displayNone = this.displayNone.bind(this)
        this.displayShow = this.displayShow.bind(this)
    }

    state = {
        display: false
    }

    displayShow() {
        this.setState({ display: true })
    }

    displayNone() {
        this.setState({ display: false })
    }

    render() {
        const { display } = this.state
        const { displayShow, displayNone } = this
        return (
            <ModalContext.Provider value={{
                display,
                displayShow,
                displayNone
            }}>
                {this.props.children}
            </ModalContext.Provider>
        )

    }
}

export default ModalContext;