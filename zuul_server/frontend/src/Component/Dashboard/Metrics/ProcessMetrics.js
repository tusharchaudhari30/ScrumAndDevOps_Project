import React, {Component} from 'react';

class ProcessMetrics extends Component {
    constructor(props) {
        super(props);
        this.arrival = this.props.arrival;
        this.throughput = this.props.throughput;
        this.dailywip = this.props.dailywip;
        this.cycletime = this.props.cycletime;
    }

    render() {
        return (
            <div className="h-auto lg:w-1/4 md:w-1/2 w-full my-1">
                <div
                    className="bg-white border border-gray-500 rounded m-2 h-full content-center flex justify-center flex-wrap">
                    <div className="text-center w-full p-2">
                        <p className="font-sans text-gray-700 font-medium text-base">
                            Process Metrics
                        </p>
                        <div className="flex flex-wrap justify-center">
                            <div className="lg:w-1/2 lg:inline">
                                <p className="primarycolor text-xl font-sans font-semibold w-full">
                                    {this.arrival}
                                </p>
                                <p className="font-sans text-gray-700 font-medium text-sm">
                                    Arrival Rate items/day
                                </p>
                                <p className="primarycolor text-xl font-sans font-semibold w-full">
                                    {this.dailywip}
                                </p>
                                <p className="font-sans text-gray-700 font-medium text-sm">
                                    Daily WIP items
                                </p>
                            </div>
                            <div className="lg:w-1/2 lg:inline">
                                <p className="primarycolor text-xl font-sans font-semibold w-full">
                                    {this.throughput}
                                </p>
                                <p className="font-sans text-gray-700 font-medium text-sm">
                                    Throughput items/day
                                </p>
                                <p className="primarycolor text-xl font-sans font-semibold w-full">
                                    {this.cycletime}
                                </p>
                                <p className="font-sans text-gray-700 font-medium text-sm">
                                    Cycle Time
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProcessMetrics;
