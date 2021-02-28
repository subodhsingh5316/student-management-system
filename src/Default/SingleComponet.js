import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Student1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            name: '',
            email: '',
            phone: '',
            dob: '',
        }
    }
    handleSubmit = () => {
        this.setState({
            studentList: [... this.state.studentList, { name: this.state.name, email: this.state.email, phone: this.state.phone, dob: this.state.dob }]
        })

    }
    handleRemove = (index) => {
        const newData = this.state.studentList.filter((item, findex) => findex !== index)
        this.setState({
            studentList: newData
        })

    }

    handleName = (e) => {
        console.log('event call', e.target.value)
        this.setState({
            name: e.target.value
        })

    }
    sortName = () => {
        const newData = this.state.studentList.sort(function (a, b) {
            return a.name.localeCompare(b.name)
        })
        this.setState({
            data: newData
        })
    }
    render() {
        console.log('render', this.state.studentList)
        return (
            <div className='container text-center' style={{ padding: '40px', marginTop: '40px' }}>
                <h1>Student List </h1>
                <div className='row col-12'>
                    <input type='text' className='form-control col-md-5 mx-2 my-1' placeholder='Enter name' onChange={(e) => this.handleName(e)} />
                    <input type='email' className='form-control col-md-5 mx-2 my-1 ' placeholder='Enter email' onChange={(e) => this.setState({ email: e.target.value })} />
                    <input type='number' className='form-control col-md-5 mx-2 my-1' placeholder='Enter phone' onChange={(e) => this.setState({ phone: e.target.value })} />
                    <input type='date' className='form-control col-md-5 mx-2 my-1' placeholder='Enter dob' onChange={(e) => this.setState({ dob: e.target.value })} />
                </div>
                <Button className='primary my-4' onClick={() => this.handleSubmit()}>Submit </Button>
                <Table responsive>
                    <thead className='head'>
                        <th onClick={() => this.sortName()}>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>DOB</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {this.state.studentList.map((item, index) =>
                            <tr key={index} className='middle'>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.dob}</td>
                                <td><Button className='primary my-4' onClick={() => this.handleRemove(index)}>Delete </Button></td>
                            </tr>

                        )}
                    </tbody>
                </Table>
            </div>

        )
    }
}
export default Student1;