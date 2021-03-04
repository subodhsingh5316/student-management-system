import React, { Component } from 'react'
import { Table,Button } from 'react-bootstrap'

import axios from 'axios'
class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: []
        }
    }
    recivedata=()=>{
        axios.get('http://192.168.43.31:8080/api/student') 
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
    removedata=(id)=>{
        axios.delete('http://192.168.43.31:8080/api/remove-student/'+id) 
        .then((res) => {
                console.log(res)
           this.recivedata()
        }) 
    }

    render() {
        return (
            <div>
            
            <div className='row d-flex justify-content-between my-2'>
            <h1>StudentList</h1>
            <Button onClick={()=>this.props.history.push('/add-student')} style={{width:'100px', height:'40px'}}>Add New</Button>
            </div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.studentList.map((item,index)=>
                        <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.gender}</td>
                        <td>
                        <Button className='mx-2' onClick={()=>this.props.history.push('/edit-student/'+item._id)}>Edit</Button> 
                        <Button onClick={()=>this.removedata(item._id)}>Delete</Button>
                        </td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default StudentList;