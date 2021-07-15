import React, {Component} from 'react';
import {Field, Input, InputGroup, Label} from "@zendeskgarden/react-forms";
import {Button} from "@zendeskgarden/react-buttons";
import ChangePasswordModal from "./ChangePasswordModal";

class Setting extends Component {
    state = {
        passwordmodal: false,
    }
    onclosepassword = (change) => {
        this.setState({passwordmodal: change});
    }

    render() {
        return (
            <div className="lg:ml-56 mt-20 h-full bg-white w-full">
                {this.state.passwordmodal && <ChangePasswordModal onclose={this.onclosepassword}/>}
                <div className="lg:w-1/2 w-full">
                    <div className="metric_card m-3 rounded border border-gray-500">
                        <p className="text-center font-semibold m-3">Profile Setting</p>
                        <div className="w-2/3 px-5 pb-5">
                            <Field>
                                <Label>Name</Label>
                                <InputGroup>
                                    <Input placeholder={"Name"} value={"Tushar Chaudhari"} readOnly/>
                                    <Button>Change</Button>
                                </InputGroup>
                            </Field>
                        </div>
                        <div className="px-5 pb-5">
                            <Label>Password</Label>
                            <br/>
                            <Button isPrimary onClick={() => this.onclosepassword(true)}>
                                Change Password
                                <i className="fas fa-lock px-1"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Setting;