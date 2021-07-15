import React, {Component} from 'react';
import {Body, Footer, FooterItem, Header, Modal} from "@zendeskgarden/react-modals";
import {Button} from "@zendeskgarden/react-buttons";
import {Field, Input, Label} from "@zendeskgarden/react-forms";

class ChangePasswordModal extends Component {
    render() {
        return (
            <Modal onClose={() => this.props.onclose(false)} class={"w-1/2"}>
                <Header>Change Password</Header>
                <Body>
                    <Field>
                        <Label>Old Password</Label>
                        <Input placeholder="Old Password" type={"password"}/>
                    </Field>
                    <Field>
                        <Label>New Password</Label>
                        <Input placeholder="New Password" type={"password"}/>
                    </Field>
                    <Field>
                        <Label>Confirm Password</Label>
                        <Input placeholder="Confirm Password" type={"password"}/>
                    </Field>
                </Body>
                <Footer>
                    <FooterItem>
                        <Button onClick={() => this.props.onclose(false)} isBasic>
                            Cancel
                        </Button>
                    </FooterItem>
                    <FooterItem>
                        <Button isPrimary onClick={() => this.props.onclose(false)}>
                            Save
                        </Button>
                    </FooterItem>
                </Footer>
            </Modal>
        );
    }
}

export default ChangePasswordModal;
