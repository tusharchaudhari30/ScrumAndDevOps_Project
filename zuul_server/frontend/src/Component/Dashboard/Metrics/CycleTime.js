import React, {Component} from 'react';

class CycleTime extends Component {
    constructor(props) {
        super(props);
        this.cycletime = this.props.cycletime;
        this.workpercentage = this.props.workpercentage;

    }

    render() {
        return (<div className="h-auto lg:w-1/4 md:w-1/2 w-full my-1">
                <div
                    className="bg-white border border-gray-500 rounded m-2 h-full justify-center content-center flex-wrap flex"
                >
                    <div className="text-center w-full p-2">
                        <p className="font-sans text-gray-700 font-medium text-base">
                            Cycle Time
                        </p>

                        <p
                            className="primarycolor text-2xl font-sans font-semibold w-full"
                        >
                            {this.cycletime}
                        </p>
                        <p className="font-sans text-gray-700 font-medium text-sm">
                            were needed to complete
                        </p>
                        <p
                            className="primarycolor text-2xl font-sans font-semibold w-full"
                        >
                            {this.workpercentage}%
                        </p>
                        <p className="font-sans text-gray-700 font-medium text-sm">
                            work items
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CycleTime;
