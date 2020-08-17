import React, {Component} from 'react';

class Wip extends Component {
    constructor(props) {
        super(props);
        this.workitem = this.props.workitem;
    }

    render() {
        return (
            <div className="h-auto lg:w-1/4 md:w-1/2 w-full my-1">
                <div
                    className="bg-white border-gray-500 border rounded m-2 h-full justify-center flex flex-wrap content-center"
                >
                    <div className="text-center w-full p-2">
                        <p className="font-sans text-gray-700 font-medium text-base">
                            Work In Progress
                        </p>
                        <p
                            className="primarycolor text-2xl font-sans font-semibold w-full"
                        >
                            {this.workitem} work items
                        </p>
                        <p className="font-sans text-gray-700 font-medium text-sm">
                            are currently in progress
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wip;
