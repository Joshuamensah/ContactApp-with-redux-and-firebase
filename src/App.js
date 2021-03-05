import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Contacts from './components/Contacts';
import AddContactForm from './components/AddContactForm';
import {connect} from 'react-redux';
import {logout} from '../src/actions/authActions';

class App extends Component {
  render() {
    return (
      <>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
            <Col md="4">
              <h3>ADD CONTACTS</h3>
              <AddContactForm />
            </Col>
            <Col>
            <h3>ALL CONTACTS</h3>
            <br />
            <button onClick = {() => this.props.logout()}>logout</button>
            <br />
              <Contacts  
              // contactsData={this.state.contacts}
               deleteContact={this.deleteContact} 
              editContact={this.editContact} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
const mapDispatchToProps = {
  logout: logout
}

export default connect(null, mapDispatchToProps)(App);

