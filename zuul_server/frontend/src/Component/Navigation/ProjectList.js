import React, {Component} from 'react';

class ProjectList extends Component {
    updateproject = () => {
        this.props.update(this.props.project);
        this.props.toggleprojects();
    }

    render() {
        return (
            <div
                onClick={this.updateproject}
                className="block hoverbg text-xl rounded border-b border-gray-500 cursor-pointer">
                <p className="py-1">{this.props.project.name}</p>
            </div>
        );
    }
}

export default ProjectList;
