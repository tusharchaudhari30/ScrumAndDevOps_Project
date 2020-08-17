import React, {Component} from 'react';
import Navlist from "./Navlist";

class Navmenu extends Component {
    constructor(props) {
        super(props);
        this.state={navlist:this.props.navlist}
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if(prevProps.navlist!==this.props.navlist){
            this.setState({navlist:this.props.navlist});
        }
    }


    render() {
        return (
            <div>
                {this.state.navlist.map((nav, index) => {
                    return (
                        <Navlist nav={nav}
                                 toggleSidebar={this.props.toggleSidebar}
                                 key={index}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Navmenu;
