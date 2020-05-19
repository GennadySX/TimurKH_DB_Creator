import React, {Component} from "react";


class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="topbar">

                    <div className="topbar-left">
                        <div className="text-center">
                            <a href="/" className="logo"><i className="icon-magnet icon-c-logo"></i><span>AIS-KSTU</span></a>
                        </div>
                    </div>

                    <div className="navbar navbar-default" role="navigation">
                        <div className="container">
                            <div className="">
                                <div className="pull-left">
                                    <button className="button-menu-mobile open-left waves-effect waves-light">
                                        <i className="md md-menu"></i>
                                    </button>
                                    <span className="clearfix"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}



export default TopBar;
