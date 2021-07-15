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
        // let data=[{"id":"60ec0531b17d841f6852c770","position":1,"projectId":"60ec0531b17d841f6852c76b","name":"To Do","color":"border-red-400","workList":[{"id":"60ec0531b17d841f6852c774","epicId":"60ec0531b17d841f6852c76d","cycleId":"60ec0531b17d841f6852c770","projectId":"1","name":"Prepare Structural Documentation","priority":"Low","position":0,"tags":[{"name":"Archetect"},{"name":"Developement"}],"usersID":null,"description":"lol"},{"id":"60ec0531b17d841f6852c775","epicId":"60ec0531b17d841f6852c76d","cycleId":"60ec0531b17d841f6852c770","projectId":"1","name":"Prepare Structural Documentation","priority":"Medium","position":1,"tags":[{"name":"Archetect"},{"name":"Developement"}],"usersID":null,"description":"lol"},{"id":"60ec0531b17d841f6852c776","epicId":"60ec0531b17d841f6852c76d","cycleId":"60ec0531b17d841f6852c770","projectId":"1","name":"Prepare Structural Documentation","priority":"High","position":2,"tags":[{"name":"Archetect"},{"name":"Developement"}],"usersID":null,"description":"lol"}]},{"id":"60ec0531b17d841f6852c771","position":2,"projectId":"60ec0531b17d841f6852c76b","name":"In Progress","color":"border-blue-400","workList":[{"id":"60ec0531b17d841f6852c777","epicId":"60ec0531b17d841f6852c76e","cycleId":"60ec0531b17d841f6852c771","projectId":"1","name":"Prepare Structural Documentation","priority":"Low","position":0,"tags":[{"name":"Archetect"},{"name":"Developement"}],"usersID":null,"description":"lol"},{"id":"60ec0531b17d841f6852c778","epicId":"60ec0531b17d841f6852c76e","cycleId":"60ec0531b17d841f6852c771","projectId":"1","name":"Prepare Structural Documentation","priority":"Medium","position":1,"tags":[{"name":"Archetect"},{"name":"Developement"}],"usersID":null,"description":"lol"},{"id":"60ec0531b17d841f6852c779","epicId":"60ec0531b17d841f6852c76e","cycleId":"60ec0531b17d841f6852c771","projectId":"1","name":"Prepare Structural Documentation","priority":"High","position":2,"tags":[{"name":"Archetect"},{"name":"Developement"}],"usersID":null,"description":"lol"}]},{"id":"60ec0531b17d841f6852c772","position":3,"projectId":"60ec0531b17d841f6852c76b","name":"Code Review","color":"border-blue-400","workList":[{"id":"60ec0531b17d841f6852c77a","epicId":"60ec0531b17d841f6852c76f","cycleId":"60ec0531b17d841f6852c772","projectId":"1","name":"Prepare Structural Documentation","priority":"Low","position":0,"tags":[{"name":"Archetect"},{"name":"Developement"}],"usersID":null,"description":"lol"},{"id":"60ec0531b17d841f6852c77b","epicId":"60ec0531b17d841f6852c76f","cycleId":"60ec0531b17d841f6852c772","projectId":"1","name":"Prepare Structural Documentation","priority":"Medium","position":1,"tags":[{"name":"Archetect"},{"name":"Developement"}],"usersID":null,"description":"lol"},{"id":"60ec0531b17d841f6852c77c","epicId":"60ec0531b17d841f6852c76f","cycleId":"60ec0531b17d841f6852c772","projectId":"1","name":"Prepare Structural Documentation","priority":"High","position":2,"tags":[{"name":"Archetect"},{"name":"Developement"}],"usersID":null,"description":"lol"}]},{"id":"60ec0531b17d841f6852c773","position":4,"projectId":"60ec0531b17d841f6852c76b","name":"Done","color":"border-green-400","workList":[]}];
        // this.setState({cycle: data})
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
            <div className={"lg:ml-56 mt-20 bg-white min-h-screen"}>
            <Projectinfo/>
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="flex flex-wrap">
                    {this.state.cycle.map((cycle, index) => <Cycle key={index}
                                                                   cycle={cycle}
                                                                   index={index}
                                                                   togglemodalworkform={this.togglemodalworkform}
                    />)}
                </div>
            </DragDropContext>
            </div>
        </div>;
    }


}

export default Kanban;
