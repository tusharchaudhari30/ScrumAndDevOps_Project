import React, {Component} from 'react';
import Cycle from "./Cycle";
import {DragDropContext} from "react-beautiful-dnd";
import WorkModalForm from "../../GanntChart/WorkModalForm";
import Projectinfo from "./Projectinfo";
import UserRest from "../../../Client/UserRest";
import ClientCrud from "../../../Client/ClientCrud";


class Kanban extends Component {
    constructor(props) {
        super(props);
        this.borders = "border-red-400 border-blue-400 border-green-400";
        this.workmodalwrapper = React.createRef();
        this.state = {
            currentwork: {
                name: "",
                description: "",
                cycleId: "",
                tags: []
            },
            cycle: []
        }
    }

    togglemodalworkform = (work) => {
        const wrap = this.workmodalwrapper.current;
        this.setState({currentwork: work});
        wrap.classList.toggle('hidden');
    }
    modifywork = (work) => {
        ClientCrud.update(work, "work").then(u => UserRest.getBoard(this.props.project.id).then((data) => {
            this.setState({cycle: data});
        }));
    }

    onDragEnd = result => {
        if (result != null && result.destination != null) {
            this.state.cycle[parseInt(result.destination.droppableId)].workList.splice(result.destination.index, 0,
                this.state.cycle[parseInt(result.source.droppableId)].workList.splice(result.source.index, 1)[0]);
            let work = Object.assign({}, this.state.cycle[parseInt(result.destination.droppableId)].workList[result.destination.index])
            work.cycleId = this.state.cycle[parseInt(result.destination.droppableId)].id;
            work.position = result.destination.index;
            ClientCrud.drag(work, "work");
            this.setState({});
        }
    }

    componentDidMount() {
        UserRest.getBoard(this.props.project.id).then(data => this.setState({cycle: data}));
    }


    deletework = (work) => {
        ClientCrud.delete(work, "work").then(u =>
            UserRest.getBoard(this.props.project.id).then((data) => {
                this.setState({cycle: data});
            })
        );
    }

    render() {
        return <div className="w-full h-full">
            <WorkModalForm wrapper={this.workmodalwrapper} togglemodalworkform={this.togglemodalworkform}
                           work={this.state.currentwork} modifywork={this.modifywork}
                           removework={this.removework} deletework={this.deletework}
                           removeshow={"hidden"}
            />
            <div className="lg:ml-56 mt-20 bg-white min-h-screen">
                <Projectinfo/>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className="flex flex-wrap">
                        {this.state.cycle.map((cycle, index) => <Cycle key={index}
                                                                       cycle={cycle}
                                                                       index={index}
                                                                       togglemodalworkform={this.togglemodalworkform}
                        />)}
                    </div>
                </DragDropContext></div>
        </div>;
    }


}

export default Kanban;
