import React, {Component} from 'react';
import moment from "moment";

class EpicModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {epic: Object.assign({}, this.props.epic)}
    }

    togglemodal = () => {
        this.props.togglemodalepicform(this.state.epic);
    }
    formchanges = (event) => {
        let epic = this.state.epic;
        switch (event.target.id) {
            case "name":
                epic.name = event.target.value;
                break;
            case "startingDate":
                epic.startingDate = new Date(event.target.value);
                break;
            case "endingDate":
                epic.endingDate = new Date(event.target.value);
                break;
            case "description":
                epic.description = event.target.value;
                break;

            default :
                break;
        }
        this.setState({epic: epic});
    }
    savechanges = () => {
        this.props.modifyepic(this.state.epic);
        this.props.togglemodalepicform(this.state.epic);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.epic !== this.props.epic) {
            this.setState({epic: Object.assign({}, this.props.epic)})
        }
    }

    deleteepic = () => {
        this.props.deleteepic(this.state.epic);
        this.props.togglemodalepicform(this.state.epic)
    }

    render() {
        return (
            <div className="w-full hidden" ref={this.props.wrapper}>
                <div className="fixed h-full w-full bg-gray-900 bg-opacity-75 z-10 flex justify-center">
                    <div className="bg-white lg:w-1/2 w-full self-center m-4 lg:m-0 z-50">
                        <div className="flex-1">
                            <div className="float-right text-gray-700 text-2xl pr-2">
                                <i className="fa fa-times cursor-pointer" onClick={this.togglemodal}
                                   aria-hidden="true"/>
                            </div>
                            <div className="w-full text-gray-700 text-lg font-medium p-2 text-center">
                                {this.state.epic.name}
                            </div>
                            <div className="w-full">
                                <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                                    <div className="mb-4 flex flex-wrap w-full">
                                        <div className="w-full">
                                            <label className="block text-gray-600 text-sm font-semibold mb-2"
                                                   htmlFor="title">
                                                Name
                                            </label>
                                            <input
                                                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="name"
                                                type="text"
                                                value={this.state.epic.name}
                                                onChange={this.formchanges}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full mb-4 flex flex-wrap">
                                        <div className="md:w-1/2 w-full">
                                            <label className="block text-gray-600 text-sm font-semibold mb-2"
                                                   htmlFor="title">
                                                Starting Date
                                            </label>
                                            <input
                                                className="bg-gray-100 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="startingDate"
                                                type="date"
                                                value={moment(this.state.epic.startingDate).format("YYYY-MM-DD")}
                                                onChange={this.formchanges}
                                            />
                                        </div>
                                        <div className="md:w-1/2 w-full">
                                            <label className="block text-gray-600 text-sm font-semibold mb-2"
                                                   htmlFor="title">
                                                Ending Date
                                            </label>
                                            <input
                                                className="bg-gray-100 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="endingDate"
                                                type="date"
                                                onChange={this.formchanges}
                                                value={moment(this.state.epic.endingDate).format("YYYY-MM-DD")}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-600 text-sm font-semibold mb-2"
                                            htmlFor="username"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            onChange={this.formchanges}
                                            value={this.state.epic.description}
                                            rows="4"
                                            cols="50"
                                            className="bg-gray-100 p-1 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="description"
                                        />
                                    </div>
                                    <div className="flex">
                                        <label
                                            className="p-2 text-gray-600 text-sm font-semibold mb-2"
                                        >
                                            Assignee:
                                        </label>
                                        <div className="p-2 cursor-pointer">
                                            <img alt="userprofile"
                                                 className="flex h-10 rounded-full shadow-xs shadow-md"
                                                 src="/tushar.webp"/>
                                        </div>
                                        <div className="p-2">
                                            <div
                                                className="flex h-10 rounded-full text-blue-700 shadow-md border-2 border-blue-300 hover:bg-blue-600 duration-300 hover:text-gray-200"
                                                style={{cursor: 'pointer'}}
                                            >
                                                <i className="fa fa-plus m-3" aria-hidden="true"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex">
                                            <div
                                                className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                                                onClick={this.savechanges}
                                            >
                                                Save
                                            </div>
                                            <div
                                                className="m-2 text-red-500 border-red-500 border-2 hover:text-white transition hover:bg-red-500 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                                                onClick={this.deleteepic}
                                            >
                                                Delete
                                            </div>
                                        </div>
                                        <div
                                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
                                            onClick={this.togglemodal}
                                        >
                                            cancel
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

export default EpicModalForm;
