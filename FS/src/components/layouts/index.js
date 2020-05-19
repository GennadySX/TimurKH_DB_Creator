import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


import TopBar from "./TopBar";
import Sidebar from "./sidebar";
import Modal from "../Modal";



const LayoutContent = (props) => {
    return <React.Fragment>
        <div id="wrapper">

        <TopBar is={props} />
        <Sidebar is={props} />
        {props.children}
            <Modal />
        </div>
    </React.Fragment>
}



class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <LayoutContent {...this.props} />
        );
    }
}


export default withRouter((Layout));
