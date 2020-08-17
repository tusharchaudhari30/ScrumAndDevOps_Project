import React, {Component} from 'react';

class Progressbar extends Component {
    constructor(props) {
        super(props);
        if (this.props.progress <= 33) {
            this.bgcolor = "#FA8989";
        } else {
            if (this.props.progress > 33 && this.props.progress <= 66) {
                this.bgcolor = "#3e95cd";
            }
            if (this.props.progress > 66) {
                this.bgcolor = "#3cba9f";
            }
        }
    }

    render() {
        return (
            <div className="flex p-1 lg:px-5 w-full flex-wrap">
                <div className="w-full text-center font-sans font-semibold text-gray-700 p-2">
                    <p>{this.props.name}</p>
                </div>
                <div className="w-full">
                    <div className="p-1 rounded" style={{background: "#efefef"}}>
                        <div
                            className=" text-xs leading-none py-1 text-center text-white font-sans font-semibold rounded-lg"
                            style={{width: this.props.progress + "%", background: this.bgcolor}}>{this.props.progress}%
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Progressbar;
