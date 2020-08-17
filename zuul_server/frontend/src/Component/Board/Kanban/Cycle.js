import React, {Component} from 'react';
import Work from "./Work";
import {Droppable} from "react-beautiful-dnd";

class Cycle extends Component {
    creatework = () => {
        let work = {
            name: "",
            description: "",
            cycleId: this.props.cycle.id,
            tags: [],
            priority: "Low",
        }
        this.props.togglemodalworkform(work);
    }

    render() {
        return (
            <div className="w-full sm:w-full md:w-1/2 lg:1/4 xl:w-1/4">
                <div
                    className={"rounded text-gray-700 cardpannel m-2 shadow-inner border-t-4 " + this.props.cycle.color}>
                    <div className="pt-2 pl-4 h-12 primarycolor">
                        <p className="text-xl float-left font-sans font-bold">
                            {this.props.cycle.name}
                        </p>
                        <span className="float-right pt-1 pr-3 cursor-pointer" onClick={this.creatework}>
                                <i className="fa fa-plus"/>
                            </span>
                    </div>
                    <Droppable droppableId={this.props.index + ""}>
                        {(provided) => (
                            <div ref={provided.innerRef}
                                 {...provided.droppableProps}
                            >
                                <div className="min-h-full min-w-full p-2">
                                    {this.props.cycle.workList.map((work, index) => <Work work={work} key={work.id}
                                                                                          index={index}
                                                                                          togglemodalworkform={this.props.togglemodalworkform}
                                        />
                                    )}
                                </div>
                                {provided.placeholder}
                            </div>
                        )
                        }
                    </Droppable>
                </div>
            </div>
        );
    }
}

export default Cycle;
