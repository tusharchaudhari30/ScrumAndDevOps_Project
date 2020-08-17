import React, {Component} from 'react';
import WorksList from "./WorksList";

class Epic extends Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef()
    }

    togglemodalepicform = () => {
        this.props.togglemodalepicform(this.props.epic);
    }
    addwork = () => {
        this.props.toggleaddnewworkform(this.props.epic);
    }

    toggleList = () => {
        const wrap = this.wrapper.current;
        wrap.classList.toggle('collapsed');
    }

    render() {
        return (
            <div>
                <div className="p-2 w-full flex text-left flex-wrap border-b-2 hoverbg">
                    <div className="w-11/12 p-2 " onClick={this.togglemodalepicform}>
                        <h1 className="font-sans font-semibold text-blue-800 text-xl">{this.props.epic.name}</h1>
                        <div className="flex text-blue-700">
                            <div className="p-1">
                                <p className=" font-medium text-sm">
                                    <i className="fa fa-user pr-1" aria-hidden="true"/>
                                    {this.props.epic.peoples} Peoples
                                </p>
                            </div>
                            <div className="p-1">
                                <p className=" font-medium text-sm">
                                    <i className="fa fa-comments pr-1" aria-hidden="true"/>
                                    {this.props.epic.comments} Comments
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/12 text-xl text-blue-800" onClick={this.toggleList}>
                        <i className="fa fa-chevron-down float-right p-2" style={{cursor: 'pointer'}}/>
                    </div>
                </div>
                <div className="collapsible-wrapper collapsed" ref={this.wrapper}>
                    <ul className="pl-4 pr-2 py-2 collapsible w-full">
                        {this.props.epic.workList.map((work, index) => <WorksList work={work}
                                                                                  key={index}
                                                                                  togglemodalworkform={this.props.togglemodalworkform}
                        />)}
                        <div className="text-center h-10 hoverbg text-gray-700 py-1 cursor-pointer"
                             onClick={this.addwork}
                        >
                            <i className="fa fa-plus p-2"/>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Epic;
