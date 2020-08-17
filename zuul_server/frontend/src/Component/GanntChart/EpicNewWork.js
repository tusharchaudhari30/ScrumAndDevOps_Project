import React, {Component} from 'react';

class EpicNewWork extends Component {
    constructor(props) {
        super(props);
        this.state = {works: props.notassignwork};
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (this.props.notassignwork !== this.state.works) {
            this.setState({works: this.props.notassignwork});
        }
    }

    addwork = () => {
        this.props.togglemodalworkform({
            name: "",
            description: "",
            epicId: this.props.epic.id,
            priority: "low",
            projectId: this.props.epic.projectId,
            tags: []
        });
        this.toggle();
    }
    toggle = () => {
        this.props.toggleaddnewworkform(this.props.epic);
    }

    render() {
        return (
            <div className="w-full hidden" ref={this.props.wrapperref}>
                <div className="fixed h-full w-full bg-gray-900 bg-opacity-75 z-10 flex justify-center">
                    <div className="bg-white lg:w-1/2 w-full self-center m-4 lg:m-0 z-50">
                        <div className="flex-1">
                            <div className="float-right text-gray-700 text-2xl pr-2">
                                <i className="fa fa-times cursor-pointer" onClick={this.toggle}
                                   aria-hidden="true"/>
                            </div>
                            <div className="w-full text-gray-700 text-lg font-medium px-8 py-2 text-center">
                                New Work
                            </div>
                            <div className="w-full">
                                <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                                    <div className="mb-4 w-full">
                                        {this.state.works.map((work, index) => {
                                            let onclickwork = () => {
                                                work.epicId = this.props.epic.id;
                                                this.props.modifywork(work);
                                                this.props.toggleaddnewworkform(this.props.epic);
                                            }

                                            return (<div
                                                className="flex-1 text-center h-10 hoverbg text-gray-700 p-2 cursor-pointer"
                                                key={index} onClick={onclickwork}
                                            >
                                                {work.name}
                                            </div>);
                                        })}
                                        <div
                                            className="flex-1 text-center h-10 hoverbg text-gray-700 py-1 cursor-pointer"
                                            onClick={this.addwork}
                                        >
                                            <i className="fa fa-plus p-2 "/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EpicNewWork;
