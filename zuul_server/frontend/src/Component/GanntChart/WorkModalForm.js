import React, {Component} from 'react';

class WorkModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {work: Object.assign({}, this.props.work)}
    }

    togglemodal = () => {
        this.props.togglemodalworkform(this.state.work);
    }
    removeworkfrommodal = () => {
        this.props.removework(this.state.work);
        this.props.togglemodalworkform(this.state.work);
    }
    deleteworkfrommodal = () => {
        this.props.deletework(this.state.work);
        this.props.togglemodalworkform(this.state.work);
    }
    formchanges = (event) => {
        let work = Object.assign({}, this.state.work);
        switch (event.target.id) {
            case "name":
                work.name = event.target.value;
                break;
            case "description":
                work.description = event.target.value;
                break;
            case "priority":
                work.priority = event.target.value;
                break;
            default :
                break;
        }
        this.setState({work: work});
    }
    tagenter = (event) => {
        if (event.keyCode === 13) {
            let work = this.state.work;
            let tags = Object.assign([], work.tags);
            tags.push({name: event.target.value});
            work.tags = tags;
            this.setState({work: work});
            event.target.value = "";
        } else {
            if (event.keyCode === 8) {
                let work = this.state.work;
                let tags = Object.assign([], work.tags);
                tags.pop();
                work.tags = tags;
                this.setState({work: work});
                event.target.value = "";
            }
        }
    }
    savechanges = () => {
        this.props.modifywork(this.state.work);
        this.props.togglemodalworkform(this.state.work);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.work !== this.props.work) {
            this.setState({work: Object.assign({}, this.props.work)});
        }
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
                                {this.state.work.name}
                            </div>
                            <div className="w-full">
                                <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                                    <div className="mb-4 flex flex-wrap w-full">
                                        <div className="lg:w-1/2 w-full lg:pr-2">
                                            <label className="block text-gray-600 text-sm font-semibold mb-2"
                                                   htmlFor="name">
                                                Name
                                            </label>
                                            <input
                                                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="name"
                                                type="text"
                                                value={this.state.work.name}
                                                onChange={this.formchanges}
                                            />
                                        </div>
                                        <div className="lg:w-1/2 w-full lg:pl-2">
                                            <label className="block text-gray-600 text-sm font-semibold mb-2"
                                                   htmlFor="name">
                                                Tags
                                            </label>
                                            <div
                                                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="name"
                                            >
                                                <div className="flex">
                                                    {this.state.work.tags.map((tag, index) => {
                                                        return <div className="pl-1 pt-1" key={index}>
                                                            <p
                                                                className="bg-gray-300 text-blue-800 font-medium text-sm shadow-sm rounded-full px-2">
                                                                {tag.name}
                                                            </p>
                                                        </div>
                                                    })}
                                                    <input
                                                        className="focus:outline-none w-full h-full appearance-none bg-gray-100"
                                                        id="tags"
                                                        type="text"
                                                        onKeyDown={this.tagenter}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-600 text-sm font-semibold mb-2"
                                            htmlFor="description"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            onChange={this.formchanges}
                                            value={this.state.work.description}
                                            rows="4"
                                            cols="50"
                                            className="bg-gray-100 p-1 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="description"
                                        />
                                    </div>
                                    <div className="w-full mb-4 flex">
                                        <div className="pr-2 lg:w-1/2">
                                            <label className="block text-gray-600 text-sm font-semibold mb-2"
                                                   htmlFor="name">
                                                Priority
                                            </label>
                                            <select
                                                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="priority"
                                                value={this.state.work.priority} onChange={this.formchanges}
                                            >
                                                <option value="Low">Low</option>
                                                <option value="Medium">Medium</option>
                                                <option value="High">High</option>
                                            </select>
                                        </div>
                                        <div className="flex lg:w-1/2 p-5">
                                            <label
                                                className="pt-4 text-gray-600 text-sm font-semibold mb-2"
                                            >
                                                Assignee:
                                            </label>
                                            <div className="p-2 cursor-pointer" title="Tushar Chaudhari">
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
                                                onClick={this.deleteworkfrommodal}
                                            >
                                                Delete
                                            </div>
                                            <div
                                                className={this.props.removeshow + " m-2 text-pink-500 border-pink-500 border-2 hover:text-white transition hover:bg-pink-500 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"}
                                                onClick={this.removeworkfrommodal}
                                            >
                                                Remove
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

export default WorkModalForm;
