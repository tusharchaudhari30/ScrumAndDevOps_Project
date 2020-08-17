import React, {Component} from 'react';

class Sprint extends Component {
    constructor(props) {
        super(props);
        this.colapseref = React.createRef();
    }

    toggleList = () => {
        const wrap = this.colapseref.current;
        wrap.classList.toggle('collapsed');
    }

    render() {
        return (
            <div className="border mb-4 border-gray-500">
                <div className="p-2 w-full flex text-left flex-wrap hoverbg">
                    <div className="w-11/12 p-2">
                        <h1 className="font-sans font-semibold text-blue-800 text-xl">
                            Sprint 1
                        </h1>
                        <div className="flex text-blue-700">
                            <div className="p-1">
                                <p className="font-medium text-sm">
                                    <i className="fa fa-user pr-1" aria-hidden="true"/> 2
                                    Peoples
                                </p>
                            </div>
                            <div className="p-1">
                                <p className="font-medium text-sm">
                                    <i className="fa fa-comments pr-1" aria-hidden="true"/> 45
                                    Comments
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/12 text-xl text-blue-800">
                        <button className="float-right p-2 focus:outline-none">
                            <i
                                className="fa fa-chevron-down" onClick={this.toggleList}
                            />
                        </button>
                    </div>
                </div>
                <div className="collapsible-wrapper collapsed" ref={this.colapseref}>
                    <ul className="pl-4 pr-2 py-2 border-t border-gray-500 w-full collapsible">
                        <li className="border-l-2 py-1 border-gray-500 w-full">
                            <div className="bg-white w-auto m-2 sm:pl-5 rounded hoverbg">
                                <div className="flex">
                                    <div className="p-2">
                                        <div className="flex">
                                            <div className="pl-1">
                                                <p
                                                    className="bg-pink-500 text-gray-100 text-xs shadow rounded-full px-4"
                                                >
                                                    High
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="text-blue-800 text-left lg:text-lg md:text-base"
                                        >
                                            <p className="font-medium py-2">
                                                Prepare Structural Documentation
                                            </p>
                                            <div className="flex pr-4">
                                                <div className="pl-1">
                                                    <p
                                                        className="bg-gray-300 text-blue-800 font-medium text-xs shadow-sm rounded-full px-2"
                                                    >
                                                        Archetect
                                                    </p>
                                                </div>
                                                <div className="pl-1">
                                                    <p
                                                        className="bg-gray-300 text-blue-800 font-medium text-xs shadow-sm rounded-full px-2"
                                                    >
                                                        Developement
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="p-1 float-left">
                                                    <p className="text-blue-700 font-medium text-sm">
                                                        <i className="fa fa-user pr-1" aria-hidden="true"/>
                                                        Peoples
                                                    </p>
                                                </div>
                                                <div className="p-1 float-right">
                                                    <p className="text-blue-700 font-medium text-sm">
                                                        <i
                                                            className="fa fa-comments pr-1"
                                                            aria-hidden="true"
                                                        />
                                                        Comments
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <div
                            className="text-center h-10 hoverbg text-gray-700 py-1 cursor-pointer"
                        >
                            <i className="fa fa-plus p-2"/>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sprint;
