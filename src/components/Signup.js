import React, { Component } from 'react';
import {Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import  {signup}  from "../actions/authActions";

class Signup extends Component {
    constructor(props) {
        super(props);
    this.state = {
        username: "",
        email: "",
        password: "",
    }
}
handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value, 
      });
};
handleSubmit = (e) => {
    e.preventDefault();
    this.props.Signup(this.state);
    this.setState({
         username: "",
        email: "",
        password: "",
    })
}
    render() {
        return (
            <div style={{width: "50%", margin: "auto", marginTop: "50px"}}>
                <h1>SignUp here</h1>
                <br />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" name="username"
                            value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" name="email"
                            value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" name="password"
                            value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="Signup">
                        Sign Up
                </Button>
                </Form>
            </div>
        );
    }
}
const mapDispatchToProps = { 
     Signup: signup

}

export default connect(null, mapDispatchToProps)(Signup);
