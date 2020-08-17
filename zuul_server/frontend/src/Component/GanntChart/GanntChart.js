import React, {Component} from 'react';
import Gannt from "./Gannt";
import Progressbar from "./Progressbar";
import Epic from "./Epic";
import EpicModalForm from "./EpicModalForm";
import WorkModalForm from "./WorkModalForm";
import UserRest from "../../Client/UserRest";
import ClientCrud from "../../Client/ClientCrud";
import EpicNewWork from "./EpicNewWork";
import EpicRest from "../../Client/EpicRest";

class GanntChart extends Component {
    state = {
        epics: [],
        currentepic: {
            name: "",
            description: "",
        },
        currentwork: {
            name: "",
            description: "",
            cycleId: "",
            tags: []
        },
        notassignwork: [],
    }

    constructor(props) {
        super(props);
        this.epicmodalwrapper = React.createRef();
        this.workmodalwrapper = React.createRef();
        this.addepicwork = React.createRef();
    }

    componentDidMount() {
        UserRest.getTimeline(this.props.project.id).then(
            data => this.setState({epics: data})
        );
    }

    deleteepic = (epic) => {
        let old = this.state.epics;
        for (let i = 0; i < old.length; i++) {
            if (old[i].id === epic.id) {
                old.splice(i, 1);
            }
        }
        ClientCrud.delete(epic, "epic");
        this.setState({epics: old});
    }
    modifyepic = (epic) => {
        ClientCrud.update(epic, "epic").then(u => UserRest.getTimeline().then(data => this.setState({epics: data})));
    }
    modifywork = (work) => {
        ClientCrud.update(work, "work").then(u => UserRest.getTimeline().then(data => this.setState({epics: data})));
    }
    addepic = () => {
        this.togglemodalepicform(
            {
                name: "",
                description: "",
                projectId: "1"
            }
        );
    }
    removework = (work) => {
        this.removeworkstate(work);
        delete work.epicId;
        ClientCrud.update(work, "work");
    }
    deletework = (work) => {
        this.removeworkstate(work);
        ClientCrud.delete(work, "work");
    }
    removeworkstate = work => {
        let old = this.state.epics;
        for (let i = 0; i < old.length; i++) {
            if (old[i].id === work.epicId) {
                for (let j = 0; j < old[i].workList.length; j++) {
                    if (old[i].workList[j].id === work.id) {
                        old[i].workList.splice(j, 1);
                    }
                }
            }
        }
        this.setState({epics: old});
    }
    togglemodalepicform = (epic) => {
        const wrap = this.epicmodalwrapper.current;
        this.setState({currentepic: epic});
        wrap.classList.toggle('hidden');
    }
    togglemodalworkform = (work) => {
        const wrap = this.workmodalwrapper.current;
        this.setState({currentwork: work});
        wrap.classList.toggle('hidden');
    }
    toggleaddnewworkform = (epic) => {
        this.setState({currentepic: epic});
        const wrap = this.addepicwork.current;
        wrap.classList.toggle('hidden');
        EpicRest.getWorklistwithnoepic().then(
            data => this.setState({notassignwork: data})
        );
    }

    render() {
        return (
            <div className="w-full">
                <EpicModalForm wrapper={this.epicmodalwrapper} togglemodalepicform={this.togglemodalepicform}
                               epic={this.state.currentepic} modifyepic={this.modifyepic}
                               deleteepic={this.deleteepic}
                />
                <WorkModalForm wrapper={this.workmodalwrapper} togglemodalworkform={this.togglemodalworkform}
                               work={this.state.currentwork} modifywork={this.modifywork} removework={this.removework}
                               deletework={this.deletework}
                />
                <EpicNewWork wrapperref={this.addepicwork} toggleaddnewworkform={this.toggleaddnewworkform}
                             togglemodalworkform={this.togglemodalworkform} epic={this.state.currentepic}
                             notassignwork={this.state.notassignwork} modifywork={this.modifywork}
                />
                <div className="lg:ml-56 mt-20 h-full bg-white">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <div className=" md:m-2 m-1 rounded h-auto  text-center">
                                <div className="text-center w-full p-2">
                                    <p className="font-sans text-gray-700 font-medium text-sm">
                                        Gannt Chart
                                    </p>
                                    <Gannt epics={this.state.epics}/>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="md:m-2 m-1 rounded text-sm border border-gray-500 text-center">
                                <div className="text-center w-full p-2">
                                    <p className="font-sans text-gray-700 font-medium text-sm">
                                        Work Progress Bar
                                    </p>
                                    <div className="mt-1">
                                        {this.state.epics.map(epic => <Progressbar name={epic.name}
                                                                                   progress={epic.progress}
                                                                                   key={epic.id}
                                        />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="w-auto md:m-2 m-1 rounded border border-gray-500 text-sm text-center ">
                                <div className="p-2">
                                    <p className="font-sans text-gray-700 font-medium text-sm">
                                        Epic List
                                    </p>
                                    {this.state.epics.map((epic, index) => <Epic epic={epic} key={index}
                                                                                 togglemodalepicform={this.togglemodalepicform}
                                                                                 togglemodalworkform={this.togglemodalworkform}
                                                                                 toggleaddnewworkform={this.toggleaddnewworkform}
                                    />)}
                                    <div className="text-center h-10 hoverbg text-gray-700 py-1 cursor-pointer"
                                         onClick={this.addepic}
                                    >
                                        <i className="fa fa-plus p-2 "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GanntChart;
