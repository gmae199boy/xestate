import React,{ Component } from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input}
    from 'reactstrap';


class Signup extends Component {
    render() {
        return(
            <Form className="login-form">
                {/* <h1>Xestate</h1> */}
                <h2 className= "text-center">WELCOME</h2>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <Label>PASSWORD</Label>
                    <Input type="password" placeholder="Password"/>
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block">
                    Login
                </Button>
                <div className="text-center">
                    <a href="/Login">Login</a>
                    <span className="p-2">|</span>
                    <a href="/forgot-password">forgot password</a>
                </div>
            </Form>
        );
    }
}

export default Signup;