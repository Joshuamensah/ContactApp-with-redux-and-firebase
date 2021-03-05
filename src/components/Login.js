import React, { Component } from 'react';
import {Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {loginUser} from '../actions/authActions';
import {Redirect} from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
    this.state = {
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
    this.props.login(this.state.email, this.state.password)
}
    render() {
        if (this.props.auth.isLoaded && !this.props.auth.isEmpty) {
            return <Redirect to="/" />;
        }
        return (
            <div style={{width: "50%", margin: "auto", marginTop: "50px"}}>
                <h1>Login here</h1>
                <br />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" name="email"
                            value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" name="password"
                            value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="Login">
                        Login
                </Button>
                </Form>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
})
const mapDispatchToProps = {
    login: loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

