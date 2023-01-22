import React from "react";
//import { Container } from 'reactstrap';
import Navbar from '../Navbar/NavBar';
import Footer from '../Footer/Footer'


class Template extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Navbar />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Template