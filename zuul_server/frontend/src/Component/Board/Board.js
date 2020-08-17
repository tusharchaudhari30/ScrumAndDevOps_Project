import React, {Component} from 'react';
import Kanban from "./Kanban/Kanban";

class Board extends Component {

    render() {
        return (
            <Kanban project={this.props.project}/>
        );
    }
}

export default Board;
