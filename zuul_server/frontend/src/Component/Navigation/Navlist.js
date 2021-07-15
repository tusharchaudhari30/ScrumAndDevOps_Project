import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navlist extends Component {


    render() {
        return (
            <Link to={this.props.nav.link}>
                <div className="text-gray-200 ">
                    <div className="p-3 h-12 navs z-20" onClick={this.props.toggleSidebar}>
                        <div className="float-left pl-3"><i className={this.props.nav.icon + " px-2"}
                                                            aria-hidden="true"/>{this.props.nav.name}</div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default Navlist;
