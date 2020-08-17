import React, {Component} from 'react';
import CycleTime from "./CycleTime";
import Wip from "./Wip";
import FlowEfficiency from "./FlowEfficiency";
import ProcessMetrics from "./ProcessMetrics";

class Metrics extends Component {
    render() {
        return (
            <div>
                <div className="flex flex-wrap w-full my-1">
                    <CycleTime cycletime={"22d 4h or less"} workpercentage={85}/>
                    <Wip workitem={6}/>
                    <FlowEfficiency percentage={68}/>
                    <ProcessMetrics arrival={1.80} dailywip={12.26} throughput={1.11} cycletime={"11d 14h"}/>
                </div>
            </div>
        );
    }
}

export default Metrics;
