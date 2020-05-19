import React, {Component} from "react";


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="left side-menu">
                    <div className="sidebar-inner slimscrollleft">
                        <div id="sidebar-menu">
                            <ul>
                                <li className="text-muted menu-title">Навигация</li>
                                <li className="has_sub">
                                    <a href="/" className="waves-effect"><i className="ti-home"></i>
                                        <span> Главный </span></a>

                                </li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </>
        )
    }

}


export default Sidebar;
