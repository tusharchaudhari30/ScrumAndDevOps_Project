import React, {Component} from 'react';
import ReactEcharts from "echarts-for-react";
import moment from "moment";

class Gannt extends Component {
    constructor(props) {
        super(props);
        let epics = this.props.epics;
        this.state = {
            option: {
                dataZoom: [
                    {
                        type: 'slider',
                        filterMode: 'none',
                        showDataShadow: true,
                        bottom: 10,
                        height: 10,
                        borderColor: 'transparent',
                        backgroundColor: '#e2e2e2',
                        handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
                        handleSize: 20,
                        handleStyle: {
                            shadowBlur: 6,
                            shadowOffsetX: 1,
                            shadowOffsetY: 2,
                            shadowColor: '#aaa'
                        },
                        labelFormatter: ''
                    }, {
                        type: 'inside',
                        filterMode: 'weakFilter'
                    }],
                tooltip: {
                    trigger: 'axis',
                    formatter: this.tooltipformat,
                    backgroundColor: 'rgba(245, 245, 245, 0.8)',
                    borderWidth: 1,
                    borderColor: '#ccc',
                    padding: 10,
                    textStyle: {
                        color: '#000'
                    },
                },
                grid: {
                    left: "3%",
                    right: "3%",
                    bottom: "10%",
                    top: "1%",
                    containLabel: true,
                },
                xAxis: {
                    scale: true,
                    splitLine: {show: false},
                    type: 'value',
                    axisLabel: {
                        formatter: this.daytodateyear,
                    },
                },
                yAxis: {
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisPointer: {
                        type: 'none',
                    },
                    type: 'category',
                    data: epics.map(epic => epic.name)
                },
                series: [
                    {
                        name: 'hiden',
                        type: 'bar',
                        stack: 'a',
                        itemStyle: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            itemStyle: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        data: epics.map((epic, index) => {
                            return ({
                                name: epic.name,
                                value: moment(epic.startingDate).dayOfYear(),
                                year: moment(epic.startingDate).format("YYYY")
                            });
                        })
                    },
                    {
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: '#efefef'
                        },
                        clip: true,
                        name: 'work1',
                        stack: 'a',
                        barMaxWidth: 50,
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: (a) => {
                                return a.data.name;
                            },
                        },
                        data: epics.map((epic, index) => {
                            let itemstyle = {color: "#3e95cd", barBorderRadius: 10};
                            if (epic.progress <= 33) {
                                itemstyle.color = "#FA8989";
                            } else {
                                if (epic.progress > 33 && epic.progress <= 66) {
                                    itemstyle.color = "#3e95cd";
                                }
                                if (epic.progress > 66) {
                                    itemstyle.color = "#3cba9f";
                                }
                            }
                            return ({
                                name: epic.name,
                                value: moment(epic.endingDate).dayOfYear() - moment(epic.startingDate).dayOfYear(),
                                itemStyle: itemstyle
                            });
                        }),
                    }
                ],
            }
        }
    }

    tooltipformat = (param) => {
        if (param.length === 2) {
            let s = "<p style=\"text-align:center\">" + param[0].name + "</p>";
            s = s + "Starting Date : " + this.daytodate(param[0].value, param[0].data.year) + "<br/> Ending Date : " + this.daytodate(param[0].value + param[1].value, param[0].data.year);
            return s;
        }
    }
    daytodate = (value, year) => {
        let date = moment(year, 'YYYY').dayOfYear(value);
        return date.format("DD-MMMM-YYYY");
    }
    daytodateyear = (value) => {
        let date = moment().dayOfYear(value);
        return date.format("DD-MMM");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            let epics = this.props.epics;
            this.setState({
                option: {
                    dataZoom: [
                        {
                            type: 'slider',
                            filterMode: 'none',
                            showDataShadow: true,
                            bottom: 10,
                            height: 10,
                            borderColor: 'transparent',
                            backgroundColor: '#e2e2e2',
                            handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
                            handleSize: 20,
                            handleStyle: {
                                shadowBlur: 6,
                                shadowOffsetX: 1,
                                shadowOffsetY: 2,
                                shadowColor: '#aaa'
                            },
                            labelFormatter: ''
                        }, {
                            type: 'inside',
                            filterMode: 'weakFilter'
                        }],
                    tooltip: {
                        trigger: 'axis',
                        formatter: this.tooltipformat,
                        backgroundColor: 'rgba(245, 245, 245, 0.8)',
                        borderWidth: 1,
                        borderColor: '#ccc',
                        padding: 10,
                        textStyle: {
                            color: '#000'
                        },
                    },
                    grid: {
                        left: "3%",
                        right: "3%",
                        bottom: "10%",
                        top: "1%",
                        containLabel: true,
                    },
                    xAxis: {
                        scale: true,
                        splitLine: {show: false},
                        type: 'value',
                        axisLabel: {
                            formatter: this.daytodateyear,
                        },
                    },
                    yAxis: {
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                        },
                        axisPointer: {
                            type: 'none',
                        },
                        type: 'category',
                        data: epics.map(epic => epic.name)
                    },
                    series: [
                        {
                            name: 'hiden',
                            type: 'bar',
                            stack: 'a',
                            itemStyle: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            },
                            emphasis: {
                                itemStyle: {
                                    barBorderColor: 'rgba(0,0,0,0)',
                                    color: 'rgba(0,0,0,0)'
                                }
                            },
                            data: epics.map((epic, index) => {
                                return ({
                                    name: epic.name,
                                    value: moment(epic.startingDate).dayOfYear(),
                                    year: moment(epic.startingDate).format("YYYY")
                                });
                            })
                        },
                        {
                            type: 'bar',
                            showBackground: true,
                            backgroundStyle: {
                                color: '#efefef'
                            },
                            clip: true,
                            name: 'work1',
                            stack: 'a',
                            label: {
                                show: true,
                                position: 'inside',
                                formatter: (a) => {
                                    return a.data.name;
                                },
                            },
                            data: epics.map((epic, index) => {
                                let itemstyle = {color: "#3e95cd", barBorderRadius: 10};
                                if (epic.progress <= 33) {
                                    itemstyle.color = "#FA8989";
                                } else {
                                    if (epic.progress > 33 && epic.progress <= 66) {
                                        itemstyle.color = "#3e95cd";
                                    }
                                    if (epic.progress > 66) {
                                        itemstyle.color = "#3cba9f";
                                    }
                                }
                                return ({
                                    name: epic.name,
                                    value: moment(epic.endingDate).dayOfYear() - moment(epic.startingDate).dayOfYear(),
                                    itemStyle: itemstyle
                                });
                            }),
                        }
                    ],
                }
            });
        }
    }

    render() {
        return (
            <ReactEcharts option={this.state.option} style={{width: '100%'}}/>
        );
    }
}

export default Gannt;
