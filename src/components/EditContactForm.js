import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {editContact} from '../actions/contactsActions';

class EditContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: props.contactInfo.fullname,
            phonenumber: props.contactInfo.phonenumber,
            address: props.contactInfo.address,
            email: props.contactInfo.email,
            type: props.contactInfo.type,
            id: props.contactInfo.id,
        };
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updatedContact(this.state)
        this.setState({
            fullname: "",
            phonenumber: "",
            address: "",
            email: "",
            type: "",
        });
        this.props.closeModal();
         
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control type="text" placeholder="Enter Fullname" name="Fullname" 
                    value={this.state.fullname} onChange={this.handleChange} />
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phonenumber</Form.Label>
                    <Form.Control type="number" placeholder="Phonenumber" name="phonenumber" 
                    value={this.state.phonenumber} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text-area" placeholder="Enter aAddress" name="address" 
                    value={this.state.address} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="email" 
                    value={this.state.email} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="type" placeholder="Enter type" name="type" 
                    value={this.state.type} onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Edit Contact
                </Button>
            </Form>
        );
    }
}
const mapDispatchToProps = {
    updatedContact: editContact
}

export default connect(null, mapDispatchToProps) (EditContactForm);


