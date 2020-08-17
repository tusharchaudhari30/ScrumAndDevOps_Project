import React, {Component} from 'react';
import AuthUtil from "./Client/AuthUtil";

class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    formchanges = (event) => {
        switch (event.target.id) {
            case "email":
                this.setState({email: event.target.value});
                break;
            case "password":
                this.setState({password: event.target.value});
                break;
            default :
                break;
        }
    }
    savechanges = () => {
        AuthUtil.getToken(this.state.email, this.state.password)
            .then(data => this.props.updateauth(data));
    }

    render() {
        return (
            <div className="min-h-screen flex justify-center bg-gray-200">
                <div className="self-center md:w-1/2 w-full">
                    <div
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col flex-1"
                    >
                        <div className="text-2xl text-blue-900 mb-4 font-semibold">
                            Login
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-grey-darker text-sm font-bold mb-2"
                                htmlFor="username"
                            >
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker focus:outline-none"
                                id="email"
                                type="text"
                                value={this.state.email}
                                onChange={this.formchanges}
                                placeholder="Username"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-grey-darker text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 focus:outline-none"
                                id="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.formchanges}
                                placeholder="******************"
                            />
                            <p className="text-red text-xs italic">Please choose a password.</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none"
                                type="button"
                                onClick={this.savechanges}
                            >
                                Sign In
                            </button>
                            <div
                                className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                            >
                                Forgot Password?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;