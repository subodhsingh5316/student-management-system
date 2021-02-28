import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
class AddStudent extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            dob: e.target.dob.value,
            gender: e.target.gender.value
        }
        console.log(data)
        axios.post('http://192.168.43.31:8080/api/student', data)
            .then((res) => {
                console.log(res)
                if(res.data.status === 201){
                    this.props.history.push('/')
                }
            })
    }
    render() {
        return (
            <div>
                <div className='row d-flex justify-content-between my-2'>
                    <h1>Add student</h1>
                    <Button onClick={() => this.props.history.goBack()} style={{ width: '100px', height: '40px' }}>Back</Button>
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>phone</Form.Label>
                        <Form.Control name='phone' type="number" placeholder="Phone" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control name='gender' as="select">
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Dob</Form.Label>
                        <Form.Control name='dob' type="date" placeholder="Date of birth" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>
            </div>
        )
    }
}
export default AddStudent;