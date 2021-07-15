import React, {Component} from 'react';
import Logo from "./Logo";
import Navmenu from "./Navmenu";
import ProfileInfo from "./ProfileInfo";
import TopNav from "./TopNav";

class Sidebar extends Component {
    kanban = [
        {
            id: 0,
            name: "Home",
            link: "/project/",
            icon: "fas fa-home"
        },
        {
            id: 1,
            name: "Kanban Board",
            link: "/project/board",
            icon: "far fa-calendar-check"
        },
        {
            id: 2,
            name: "Roadmap",
            link: "/project/gannt",
            icon: "fas fa-chart-bar"
        },
        {
            id: 3,
            link: "/project/setting",
            name: "Setting",
            icon: "fas fa-cog"
        },
    ]
    scrum = [
        {
            id: 0,
            name: "Home",
            link: "/project/",
            icon: "fas fa-home"
        },
        {
            id: 1,
            link: "/project/backlogs",
            name: "Backlogs",
            icon: "fas fa-history"
        },
        {
            id: 2,
            link: "/project/board",
            name: "Board",
            icon: "far fa-calendar-check"
        },
        {
            id: 3,
            link: "/project/setting",
            name: "Setting",
            icon: "fas fa-cog"
        },

    ]

    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.state = {navlist: this.getnavlist(this.props.project)};
    }

    toggleSidebar = () => {
        const wrap = this.wrapper.current;
        wrap.classList.toggle('hidesidebar');
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (prevProps.project !== this.props.project) {
            this.setState({navlist: this.getnavlist(this.props.project)})
        }
    }

    getnavlist = (project) => {
        if (project !== null) {
            switch (project.projectType) {
                case "kanban":
                    return this.kanban
                case "scrum":
                    return this.scrum
                default:
                    return null
            }
        } else {
            return []
        }
    }

    render() {
        return (
            <div>
                <TopNav toggleSidebar={this.toggleSidebar}/>
                <div ref={this.wrapper} className="lg:block sidebar hidesidebar h-full">
                    <div className="h-full lg:w-56 font-sans font-medium fixed z-10 w-full navlist">
                        <Logo/>
                        <div className="h-auto mt-10 text-base">
                            <Navmenu toggleSidebar={this.toggleSidebar} navlist={this.state.navlist}/>
                        </div>
                        <ProfileInfo/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
