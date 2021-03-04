import React, { Component } from 'react'
import {Form,Button } from 'react-bootstrap';
class SignUp extends React.Component {
    render() {
        return (
            <div className='sign-cont'>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                       <Form.Label>Name</Form.Label>
                         <Form.Control type="name" required placeholder="Enter name" />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                   </Button>
                   <div class='d-flex row justify-content-between text-white'><small>If you'r already resister</small>
                   <a href='/login' className='text-white color-white'><small>Login</small></a>
                   </div>
                </Form>
            </div>
        )
    }
}
export default SignUp;