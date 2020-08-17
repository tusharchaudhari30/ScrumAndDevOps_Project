import React, {Component} from 'react';

class Projectinfo extends Component {
    render() {
        return (
            <div className="flex">
                <div className="flex">
                    <p className="p-8 primarycolor font-medium font-sans text-2xl">
                        Project Name
                    </p>
                </div>
                <div className="pt-8 p-2 hidden sm:block">
                    <img alt="userprofile" className="flex h-10 rounded-full shadow-xs shadow-md" src="/tushar.webp"/>
                </div>
                <div className="pt-8 p-2">
                    <div
                        className="flex h-10 rounded-full text-blue-700 shadow-md border-2 border-blue-300 hover:bg-blue-600 duration-300 hover:text-gray-200"
                        style={{cursor: 'pointer'}}
                    >
                        <i className="fa fa-plus m-3" aria-hidden="true"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projectinfo;
