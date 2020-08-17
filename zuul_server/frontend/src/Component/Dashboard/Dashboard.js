import React, {Component} from 'react';
import Metrics from "./Metrics/Metrics";
import Charts from "./Charts/Charts";


class Dashboard extends Component {
    render() {
        return (
            <div className="w-full lg:ml-56 bg-white mt-20">
                <Metrics/>
                <Charts/>
            </div>
        );
    }
}

export default Dashboard;
