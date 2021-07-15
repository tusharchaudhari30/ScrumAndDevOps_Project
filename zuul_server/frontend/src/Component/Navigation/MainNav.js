import React, {Component} from 'react';
import ProjectList from "./ProjectList";
import {Link} from "react-router-dom";

class MainNav extends Component {
    constructor(props) {
        super(props);
        this.projects = React.createRef()
    }

    toggleprojects = () => {
        const wrap = this.projects.current;
        wrap.classList.toggle('hidden');
    }

    render() {
        return (
            <nav className="bg-white h-20 border-b border-gray-500 fixed min-h-0 w-full lg:block hidden z-10">
                <div className="flex-row">
                    <div className="font-semibold font-sans text-gray-700 ml-56">
                        <div className="flex float-left">
                            <button
                                className="flex my-5 ml-10 hoverbg text-xl rounded border border-gray-500 cursor-pointer focus:outline-none">
                                <p className="py-1 px-5 font-semibold">Your Work</p>
                            </button>
                            <button
                                className="my-5 ml-8 hoverbg rounded border border-gray-500 cursor-pointer w-40 focus:outline-none"
                            >
                                <div className="flex" onClick={this.toggleprojects}>
                                    <p className="py-1 px-5 text-xl font-semibold">Projects</p>
                                    <i className="fas fa-chevron-down py-3 px-5" aria-hidden="true"
                                    />
                                </div>
                                <div ref={this.projects}
                                     className="bg-white absolute mt-1 border-gray-500 border-l border-r border-t w-40 hidden font-semibold">
                                    {this.props.projects.map((project, index) => <Link key={index}
                                                                                       to={"/project/"}><ProjectList
                                        toggleprojects={this.toggleprojects} project={project}
                                        update={this.props.changeproject}/></Link>)}
                                </div>
                            </button>
                            <button
                                className="flex my-5 ml-8 hoverbg text-xl rounded border border-gray-500 cursor-pointer font-semibold focus:outline-none">
                                <p className="py-1 px-5">Create Project</p>
                            </button>
                        </div>
                        <a href="/tushar">
                            <span className="text-3xl p-5 float-right ">
                                <i className="fas fa-th cursor-pointer" aria-hidden="true"/>
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MainNav;
