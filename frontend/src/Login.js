import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './Login.css';

import RegistrationAlert from './RegistrationAlert.js';

class Login extends Component {
    constructor(props) {
        super(props);
        this.registrationAlert = React.createRef();
    }

    handleSubmit = event => {
        event.preventDefault();
        this.loginUser(event.target.username.value, event.target.password.value);
    }

    loginUser(username, password) {
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }).then(function (response) {
            if (response.status === 200) {
                this.showRegistrationAlert("success", "Login successful!", "You are now logged in.");
                localStorage.setItem("username", username);
                this.props.updateUsername();
            } else {
                this.showRegistrationAlert("danger", "Wrong credentials", "Username and/or password is wrong.");
            }
        }.bind(this)).catch(function (error) {
            this.showRegistrationAlert("danger", "Error", "Something went wrong.");
        }.bind(this));
    }

    showRegistrationAlert(variant, heading, message) {
        this.registrationAlert.current.setVariant(variant);
        this.registrationAlert.current.setHeading(heading);
        this.registrationAlert.current.setMessage(message);
        this.registrationAlert.current.setVisible(true);
    }

    render() {
        return (
            <>
                <div className="Login" >
                <h1 className="LoginHeader">Login</h1>
                    <Form onSubmit={this.handleSubmit} >

                        <Form.Group controlId="username" size="lg">
                            <Form.Label> Username </Form.Label>
                            <Form.Control autoFocus name="username" />
                        </Form.Group>

                        <Form.Group controlId="password" size="lg" >
                            <Form.Label > Password </Form.Label>
                            <Form.Control type="password" name="password" />
                        </Form.Group>

                        <Button block size="lg" type="submit">
                            Login
            </Button>

                    </Form>

                </div>

                <RegistrationAlert ref={this.registrationAlert} />

            </>
        );
    }

}

export default Login;