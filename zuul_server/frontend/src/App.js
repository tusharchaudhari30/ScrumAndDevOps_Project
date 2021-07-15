import React, {Component, Suspense} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Sidebar from "./Component/Navigation/Sidebar";
import './App.css'
import Login from "./Login";
import MainNav from "./Component/Navigation/MainNav";
import UserRest from "./Client/UserRest";

import {Spinner} from "@zendeskgarden/react-loaders";
import AuthUtil from "./Client/AuthUtil";

class App extends Component {
    state = {
        auth: false,
        projects: [],
        project: null
    }

    componentDidMount() {
        AuthUtil.checkToken().then(data => {
            this.setState({auth: data})
            if (data) {
                UserRest.getProjects().then(data => this.setState({projects: data, project: data[0]}));
            }
        });
        // this.setState({auth: true});
        // let data = [{
        //     "id": "60ec0531b17d841f6852c76b",
        //     "projectType": "kanban",
        //     "name": "Project 1",
        //     "userIdList": ["60ec0531b17d841f6852c76a"]
        // }, {
        //     "id": "60ec0531b17d841f6852c76c",
        //     "projectType": "scrum",
        //     "name": "Project 2",
        //     "userIdList": ["60ec0531b17d841f6852c76a"]
        // }];
        // this.setState({projects: data, project: data[0]})

    }

    changeproject = (data) => {
        this.setState({project: data});
    }
    updateauth = (data) => {
        this.setState({auth: data});
        if (data) {
            UserRest.getProjects().then(data => this.setState({projects: data, project: data[0]}));
        }
    }
    loginauthentication = () => {
        if (this.state.auth) {
            return (<div className="flex min-h-screen bg-gray-100">
                <Router>
                    <MainNav projects={this.state.projects} changeproject={this.changeproject}/>
                    <Sidebar project={this.state.project}/>
                    {this.projectloader()}
                </Router>
            </div>)
        } else {
            return <Login updateauth={this.updateauth}/>
        }
    }

    projectloader = () => {
        if (this.state.project !== null) {
            if (this.state.project.projectType === "kanban") {
                const Board = React.lazy(() => import('./Component/Board/Board'));
                const Setting = React.lazy(() => import('./Component/Setting/Setting'));
                const Dashboard = React.lazy(() => import("./Component/Dashboard/Dashboard"));
                const GanntChart = React.lazy(() => import("./Component/GanntChart/GanntChart"));
                return (
                    <React.Fragment>
                        <Suspense fallback={<div className="lg:ml-56 flex flex-wrap justify-center mt-32 w-full">
                            <Spinner size="64" color={"#155e82"}/>
                        </div>}>
                            <Route path="/project/" exact component={() => <Dashboard project={this.state.project}/>}/>
                            <Route path="/project/board" component={() => <Board project={this.state.project}/>}/>
                            <Route path="/project/gannt" component={() => <GanntChart project={this.state.project}/>}/>
                            <Route path="/project/setting" component={() => <Setting/>}/>
                        </Suspense>
                    </React.Fragment>
                )
            }
            if (this.state.project.projectType === "scrum") {
                const Dashboard = React.lazy(() => import("./Component/Dashboard/Dashboard"));
                const BackLogs = React.lazy(() => import("./Component/backlogs/BackLogs"));
                return (
                    <div className="w-full lg:ml-56 bg-white mt-20 ">
                        <Suspense fallback={<div className="lg:ml-56 flex flex-wrap justify-center mt-32 w-full">
                            <Spinner size="64" color={"#155e82"}/>
                        </div>}>
                            <Route path="/project/" exact component={() => <Dashboard project={this.state.project}/>}/>
                            <Route path="/project/backlogs" component={() => <BackLogs project={this.state.project}/>}/>
                        </Suspense>
                    </div>
                )
            }
        }
    }

    render() {
        return (
            this.loginauthentication()
        );
    }
}

export default App;
