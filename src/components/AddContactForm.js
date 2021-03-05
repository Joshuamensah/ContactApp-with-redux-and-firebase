import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addContact} from '../actions/contactsActions';
import { Form, Button } from 'react-bootstrap';

class AddContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname:"",
            phonenumber: "",
            address: "",
            email: "",
            type: "",
        };
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state)
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewContact(this.state)
        this.setState({
            Fullname:"",
            PhoneNumber: "",
            Address: "",
            Email: "",
            Type: "",
        }); 
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control type="text" placeholder="Enter Fullname" name="Fullname" 
                    value={this.state.Fullname} onChange={this.handleChange} />
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phonenumber</Form.Label>
                    <Form.Control type="number" placeholder=" Enter PhoneNumber" name="Phonenumber" 
                    value={this.state.PhoneNumber} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text-area" placeholder="Enter Address" name="Address" 
                    value={this.state.Address} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="email" 
                    value={this.state.Email} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="type" placeholder="Enter type" name="type" 
                    value={this.state.Type} onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}
const mapDispatchToProps = {
            addNewContact: addContact
}

export default connect(null, mapDispatchToProps)(AddContactForm);

