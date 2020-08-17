import React, {Component} from 'react';
import Cfd from "./Cfd";
import Cts from "./Cts";
import Cth from "./Cth";

class Charts extends Component {
    render() {
        return (<div className="flex flex-wrap w-full my-1">
                <div className="h-auto xl:w-1/3 md:w-1/2 w-full my-1">
                    <div
                        className="text-center bg-white border border-gray-500 rounded m-2 h-full justify-center content-center flex-wrap flex">
                        <p className="p-1 font-sans text-gray-700 font-medium text-sm">
                            Cumulative Flow Diagram
                        </p>
                        <div className="w-full p-2">
                            <Cfd/>
                        </div>

                    </div>
                </div>
                <div className="h-auto xl:w-1/3 md:w-1/2 w-full my-1">
                    <div
                        className="bg-white border border-gray-500 rounded m-2 h-full justify-center content-center flex-wrap flex">
                        <p className="text-center font-sans text-gray-700 font-medium text-sm">
                            Cycle Time Scatterplot
                        </p>
                        <div className="w-full p-2">
                            <Cts/>
                        </div>
                    </div>
                </div>
                <div className="h-auto xl:w-1/3 md:w-1/2 w-full my-1">
                    <div
                        className="text-center bg-white border border-gray-500 rounded m-2 h-full justify-center content-center flex-wrap flex">
                        <p className="font-sans text-gray-700 font-medium text-sm pt-0">
                            Cycle Time Histogram
                        </p>
                        <div className="w-full p-2">
                            <Cth/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Charts;
