import React, {Component} from 'react';

class FlowEfficiency extends Component {
    constructor(props) {
        super(props);
        this.percentage = this.props.percentage;
    }

    render() {
        return (
            <div className="h-auto lg:w-1/4 md:w-1/2 w-full my-1">
                <div
                    className="bg-white border border-gray-500 rounded m-2 h-full justify-center flex content-center flex-wrap"
                >
                    <div className="text-center w-full p-2">
                        <p className="font-sans text-gray-700 font-medium text-base">
                            Flow Efficiency
                        </p>

                        <p
                            className="primarycolor text-2xl font-sans font-semibold w-full"
                        >
                            {this.percentage}%
                        </p>
                        <p className="font-sans text-gray-700 font-medium text-sm">
                            Average Flow Efficiency
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FlowEfficiency;
