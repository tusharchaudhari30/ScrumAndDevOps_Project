import React, {Component} from 'react';
import ReactEcharts from "echarts-for-react";
import moment from 'moment/moment.js';

class Cts extends Component {
    constructor(props) {
        super(props);
        this.options = {
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
            yAxis: {
                splitLine: {
                    show: true,
                },
                axisLabel: {
                    show: true,
                },
                axisLine: {
                    show: false,
                },
                interval: 50,
                axisTick: {
                    show: false,
                },
            },
            series: [
                {
                    type: "scatter",
                    name: "To DO",
                    symbolSize: 10,
                    data: [
                        ["2020-07-05T10:32:12", 43],
                        ["2020-07-14T10:32:12", 40],
                        ["2020-08-13T10:32:12", 120],
                        ["2020-08-23T10:32:12", 15],
                        ["2020-09-06T10:32:12", 10],
                        ["2020-09-15T10:32:12", 160],
                        ["2020-10-06T10:32:12", 11],
                        ["2020-11-15T10:32:12", 20],
                    ],
                },
                {
                    type: "scatter",
                    name: "Done",
                    symbolSize: 10,
                    data: [
                        ["2020-07-05T10:32:12", 160],
                        ["2020-07-14T10:32:12", 30],
                        ["2020-08-13T10:32:12", 100],
                        ["2020-08-23T10:32:12", 60],
                        ["2020-09-06T10:32:12", 92],
                        ["2020-09-15T10:32:12", 45],
                    ],
                },
            ],
            color: ["#68ACCC", "#BDDCFC", "#BF88C0", "#F4BFC2", "#F7DB87", "#7BDED1"],
        };
    }

    render() {
        return (
            <ReactEcharts option={this.options} style={{width: '100%'}}/>
        );
    }
}

export default Cts;
