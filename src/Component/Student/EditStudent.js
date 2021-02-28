import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class EditStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: []
        }
    }
    recivedata=()=>{
        console.log('pathname',this.props.location.pathname.slice(14))
        axios.get('http://192.168.43.31:8080/api/student/'+this.props.location.pathname.slice(14)) 
        .then((res) => {
                console.log(res)
            this.setState({
                studentList: res.data.data
            })
        }) 
    }
    
    componentDidMount() {

        this.recivedata();
    }
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
        axios.put('http://192.168.43.31:8080/api/update-student/'+this.props.location.pathname.slice(14), data)
            .then((res) => {
                console.log(res)
                if(res.status === 204){
                    this.props.history.goBack();
                }
            })
    }
    render() {
        return (
            <div>
            <div className='row d-flex justify-content-between my-2'>
            <h1>Edit student</h1>
            <Button onClick={() => this.props.history.goBack()} style={{ width: '100px', height: '40px' }}>Back</Button>
        </div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control defaultValue={this.state.studentList.email}  name='email' type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Name</Form.Label>
                        <Form.Control defaultValue={this.state.studentList.name} name='name' type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>phone</Form.Label>
                        <Form.Control defaultValue={this.state.studentList.phone} name='phone' type="number" placeholder="Phone" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control defaultValue={this.state.studentList.gender} name='gender' as="select">
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Other'>Other</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Dob</Form.Label>
                        <Form.Control defaultValue={this.state.studentList.dob} name='dob' type="date" placeholder="Date of birth" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>
            </div>
        )
    }
}
export default EditStudent;