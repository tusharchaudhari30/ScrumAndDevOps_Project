import React, {Component} from 'react';
import {Draggable} from "react-beautiful-dnd";

class Work extends Component {
    constructor(props) {
        super(props);
        switch (this.props.work.priority) {
            case "High":
                this.state = {color: "bg-pink-500"};
                break;
            case "Medium":
                this.state = {color: "bg-blue-500"};
                break;
            case "Low":
                this.state = {color: "bg-green-500"};
                break;
            default:
                this.state = {color: "bg-blue-500"}
        }
    }

    togglemodal = () => {
        this.props.togglemodalworkform(this.props.work);
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (prevProps.work.priority !== this.props.work.priority) {
            switch (this.props.work.priority) {
                case "High":
                    this.setState({color: "bg-pink-500"});
                    break;
                case "Medium":
                    this.setState({color: "bg-blue-500"});
                    break;
                case "Low":
                    this.setState({color: "bg-green-500"});
                    break;
                default:
            }
        }
    }

    render() {
        return (
            <Draggable draggableId={this.props.work.id} index={this.props.index}>
                {provided => (
                    <div ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps} className={"bg-white m-3 w-auto shadow-lg rounded"}
                         key={this.props.work.id}>
                        <div className="flex cursor-pointer" onClick={this.togglemodal}>
                            <div className="p-2">
                                <div className="flex">
                                    <div className="pl-1">
                                        <p className={this.state.color + " text-gray-100 text-xs shadow rounded-full px-4"}>
                                            {this.props.work.priority}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-blue-800 text-left lg:text-lg md:text-base">
                                    <p className="font-medium py-2">
                                        {this.props.work.name}
                                    </p>
                                    <div className="flex pr-4">
                                        {this.props.work.tags.map((tag, index) => {
                                            return <div className="pl-1" key={index}>
                                                <p
                                                    className="bg-gray-300 text-blue-800 font-medium text-xs shadow-sm rounded-full px-2">
                                                    {tag.name}
                                                </p>
                                            </div>
                                        })}
                                    </div>
                                    <div className="flex">
                                        <div className="p-1 float-left">
                                            <p className="text-blue-700 font-medium text-sm">
                                                <i className="fa fa-user pr-1" aria-hidden="true"/>
                                                {this.props.work.peoples} Peoples
                                            </p>
                                        </div>
                                        <div className="p-1 float-right">
                                            <p className="text-blue-700 font-medium text-sm">
                                                <i className="fa fa-comments pr-1" aria-hidden="true"/>
                                                {this.props.work.comments} Comments
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
        );
    }
}

export default Work;
