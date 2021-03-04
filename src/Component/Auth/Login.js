import React, { Component } from 'react'

import { Button, Form, FormLabel, FormControl, FormText, FormGroup, FormCheck } from 'react-bootstrap'

class Login extends React.Component {
    render() {
        return (
            <React.Fragment>



                <div className='login-cont'>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" style={{width:'80%'}} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                           </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password"  style={{width:'80%'}} />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                       </Button><br/>
                       <div class='d-flex row justify-content-between text-white'><small>If you'r New User</small>
                       <a href='/signup' className='text-white color-white'><small>RESISTER</small></a>
                       </div>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}
export default Login;