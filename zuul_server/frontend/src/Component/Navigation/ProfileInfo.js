import React, {Component} from 'react';

class ProfileInfo extends Component {
    render() {
        return (
            <div className="absolute bottom-0">
                <div className="flex items-center p-5 text-gray-300 font-normal hover:text-gray-100">
                    <img className="w-10 h-10 rounded-full mr-4 shadow-xs" src="/tushar.webp" alt=""/>
                    <div className="text-base">
                        <p className="leading-none">Tushar Chaudhari</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;
