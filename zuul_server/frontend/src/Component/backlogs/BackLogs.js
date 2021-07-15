import React, {Component} from 'react';
import Sprint from "./Sprint";

class BackLogs extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="text-left text-4xl font-semibold text-gray-800 pt-5 pl-10">
                    Backlogs
                </div>
                <div className="w-full h-56 px-10 py-5">
                    <Sprint/>
                    <Sprint/>
                </div>
            </React.Fragment>
        );
    }
}

export default BackLogs;
