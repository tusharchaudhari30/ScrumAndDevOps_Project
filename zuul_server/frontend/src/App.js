import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Sidebar from "./Component/Navigation/Sidebar";
import Dashboard from "./Component/Dashboard/Dashboard";
import Board from "./Component/Board/Board";
import GanntChart from "./Component/GanntChart/GanntChart";
import './App.css'
import Login from "./Login";
import MainNav from "./Component/Navigation/MainNav";
import BackLogs from "./Component/backlogs/BackLogs";
import UserRest from "./Client/UserRest";

class App extends Component {
    state = {
        auth: false,
        projects: [],
        project:null
    }

    componentDidMount() {
        //AuthUtil.checkToken().then(data => this.setState({auth: data}));
        this.setState({auth: true});
        UserRest.getProjects().then(data => this.setState({projects: data, project: data[0]}));
    }

    changeproject=(data)=>{
        this.setState({project:data});
    }
    updateauth = (data) => {
        this.setState({auth: data});
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
                return (
                    <React.Fragment>
                        <Route path="/project/" exact component={() => <Dashboard project={this.state.project}/>}/>
                        <Route path="/project/board" component={() => <Board project={this.state.project}/>}/>
                        <Route path="/project/gannt" component={() => <GanntChart project={this.state.project}/>}/>
                    </React.Fragment>
                )
            }
            if(this.state.project.projectType==="scrum"){
                return (
                    <React.Fragment>
                        <Route path="/project/" exact component={() => <Dashboard project={this.state.project}/>}/>
                        <Route path="/project/backlogs" component={() => <BackLogs project={this.state.project}/>}/>
                    </React.Fragment>
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
