import React, {Component} from 'react';

class TopNav extends Component {
    render() {
        return (
            <nav className="bgsidebar h-20 border-b border-gray-400 shadow fixed w-full lg:hidden z-20">
                <div className="flex-row">
                    <div className="font-semibold font-serif">
                        <h1 className="text-center text-gray-200 text-3xl p-5 hover:text-white float-left">
                            BOARD
                        </h1>
                        <span className="text-gray-200 text-3xl p-5 float-right burger-toggle"
                              onClick={this.props.toggleSidebar}>
                                <i className="fa fa-bars" aria-hidden="true"/>
                            </span>
                    </div>
                </div>
            </nav>
        );
    }
}

export default TopNav;
