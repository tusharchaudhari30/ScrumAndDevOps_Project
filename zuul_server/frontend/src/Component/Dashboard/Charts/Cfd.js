import React, {Component} from 'react';
import ReactEcharts from "echarts-for-react";
import moment from "moment";

class Cfd extends Component {
    constructor(props) {
        super(props);
        this.option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: "#5a6f8c",
                    },
                },
                backgroundColor: 'rgba(245, 245, 245, 0.8)',
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 10,
                textStyle: {
                    color: '#000'
                },
                extraCssText: 'width: 170px'
            },
            grid: {
                right: "7%",
                left: "0%",
                bottom: "1%",
                top: "7%",
                containLabel: true,
            },
            xAxis: {
                type: "time",
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: true,
                },
                interval: 1000 * 3600 * 24 * 35,
                axisLabel: {
                    formatter: (value) => {
                        return moment(value).format("MMM-YY");
                    },
                },
            },
            yAxis: [
                {
                    type: "value",
                    nameTextStyle: {
                        padding: [0, 0, 15, 0],
                        fontSize: 16
                    }
                },

            ],
            series: [
                {
                    type: "line",
                    name: "Done",
                    lineStyle: {
                        width: 0,
                    },
                    areaStyle: {},
                    stack: "linestack",
                    symbolSize: 0,
                    data: [
                        ["2020-07-05T10:32:12", 10],
                        ["2020-07-14T10:32:12", 20],
                        ["2020-08-13T10:32:12", 30],
                        ["2020-08-23T10:32:12", 40],
                        ["2020-09-06T10:32:12", 45],
                        ["2020-09-15T10:32:12", 60],
                    ],
                },
                {
                    type: "line",
                    stack: "linestack",
                    name: "Ready to Delivery",
                    lineStyle: {
                        width: 0,
                    },
                    areaStyle: {},
                    symbolSize: 0,
                    data: [
                        ["2020-07-05T10:32:12", 5],
                        ["2020-07-14T10:32:12", 10],
                        ["2020-08-13T10:32:12", 10],
                        ["2020-08-23T10:32:12", 20],
                        ["2020-09-06T10:32:12", 10],
                        ["2020-09-15T10:32:12", 10],
                    ],
                },
                {
                    type: "line",
                    stack: "linestack",
                    name: "Waiting on link",
                    lineStyle: {
                        width: 0,
                    },
                    areaStyle: {},
                    symbolSize: 0,
                    data: [
                        ["2020-07-05T10:32:12", 10],
                        ["2020-07-14T10:32:12", 20],
                        ["2020-08-13T10:32:12", 10],
                        ["2020-08-23T10:32:12", 10],
                        ["2020-09-06T10:32:12", 10],
                        ["2020-09-15T10:32:12", 20],
                    ],
                },
                {
                    type: "line",
                    stack: "linestack",
                    name: "Peer Review",
                    lineStyle: {
                        width: 0,
                    },
                    areaStyle: {},
                    symbolSize: 0,
                    data: [
                        ["2020-07-05T10:32:12", 10],
                        ["2020-07-14T10:32:12", 5],
                        ["2020-08-13T10:32:12", 10],
                        ["2020-08-23T10:32:12", 15],
                        ["2020-09-06T10:32:12", 20],
                        ["2020-09-15T10:32:12", 10],
                    ],
                },
                {
                    type: "line",
                    stack: "linestack",
                    name: "Ready to Review",
                    lineStyle: {
                        width: 0,
                    },
                    areaStyle: {},
                    symbolSize: 0,
                    data: [
                        ["2020-07-05T10:32:12", 5],
                        ["2020-07-14T10:32:12", 10],
                        ["2020-08-13T10:32:12", 10],
                        ["2020-08-23T10:32:12", 15],
                        ["2020-09-06T10:32:12", 10],
                        ["2020-09-15T10:32:12", 20],
                    ],
                },
            ],
            color: ["#68ACCC", "#BDDCFC", "#BF88C0", "#F4BFC2", "#F7DB87", "#7BDED1"],
        };
    }

    render() {
        return (
            <ReactEcharts
                option={this.option}
            />
        );
    }
}

export default Cfd;
