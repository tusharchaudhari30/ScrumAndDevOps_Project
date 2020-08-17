import React, {Component} from 'react';
import ReactEcharts from "echarts-for-react";

class Cth extends Component {
    constructor(props) {
        super(props);
        this.option = {
            grid: {
                right: "7%",
                left: "0%",
                bottom: "1%",
                top: "7%",
                containLabel: true,
            },
            xAxis: [
                {
                    splitLine: {
                        show: false,
                    },
                    type: 'value',
                    axisPointer: {
                        type: 'none',
                    },

                }
            ],
            color: ["#68ACCC", "#BDDCFC", "#BF88C0", "#F4BFC2", "#F7DB87", "#7BDED1"],
            yAxis: [
                {
                    type: 'value',

                }
            ],

            series: [
                {
                    type: "bar",
                    data: [
                        [1, 2],
                        [2, 6],
                        [3, 3],
                        [4, 1],
                        [5, 0],
                        [6, 1],
                        [7, 1],
                        [8, 2],
                        [9, 0],
                        [10, 0],
                        [11, 0],
                        [12, 1],
                        [13, 1],
                        [14, 2],
                        [15, 2],
                        [16, 1]
                    ],
                    markLine: {
                        lineStyle: {
                            color: 'rgba(74,85,104,0.65)',
                            type: 'dashed',
                            width: 3,
                        },
                        label: {
                            position: 'start',
                            color: 'black',
                            fontSize: 12,
                        },
                        data: [
                            [
                                {
                                    symbol: 'none',
                                    yAxis: 'max',
                                    label: {
                                        formatter: '50%',
                                    },
                                    xAxis: 3,
                                },
                                {
                                    symbol: 'none',
                                    yAxis: 'min',
                                    xAxis: 3,
                                }
                            ],
                            [
                                {
                                    symbol: 'none',
                                    yAxis: 'max',
                                    label: {
                                        formatter: '70%',
                                    },
                                    xAxis: 8,
                                },
                                {
                                    symbol: 'none',
                                    yAxis: 'min',
                                    xAxis: 8,
                                }
                            ],
                            [
                                {
                                    symbol: 'none',
                                    yAxis: 'max',
                                    label: {
                                        formatter: '85%',
                                    },
                                    xAxis: 14,
                                },
                                {
                                    symbol: 'none',
                                    yAxis: 'min',
                                    xAxis: 14,
                                }
                            ],
                            [
                                {
                                    symbol: 'none',
                                    yAxis: 'max',
                                    label: {
                                        formatter: '95%',
                                    },
                                    xAxis: 15,
                                },
                                {
                                    symbol: 'none',
                                    yAxis: 'min',
                                    xAxis: 15,
                                }
                            ],
                        ]
                    },
                },
            ],

        };
    }

    render() {
        return (
            <ReactEcharts option={this.option}/>
        );
    }
}

export default Cth;
