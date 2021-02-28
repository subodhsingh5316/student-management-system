import { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
class AddStudent extends Component {
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
    this.props.studentInfo({ name: this.state.name, email: this.state.email, phone: this.state.phone, dob: this.state.dob })

  }
  handleName = (e) => {
    console.log('event call', e.target.value)
    this.setState({
      name: e.target.value
    })

  }
  render() {
    console.log('add student',this.state.studentList)
    return (
      <div>
        <h1>Student List </h1>
        <div className='row col-12'>
          <input type='text' className='form-control col-md-5 mx-2 my-1' placeholder='Enter name' onChange={(e) => this.handleName(e)} />
          <input type='email' className='form-control col-md-5 mx-2 my-1 ' placeholder='Enter email' onChange={(e) => this.setState({ email: e.target.value })} />
          <input type='number' className='form-control col-md-5 mx-2 my-1' placeholder='Enter phone' onChange={(e) => this.setState({ phone: e.target.value })} />
          <input type='date' className='form-control col-md-5 mx-2 my-1' placeholder='Enter dob' onChange={(e) => this.setState({ dob: e.target.value })} />
        </div>
        <Button className='primary my-4' onClick={() => this.handleSubmit()}>Submit </Button>
      </div>
    )
  }
}
class MultiComponent extends Component {
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
 
  addStudent = (data)=>{
    this.setState({
      studentList: [...this.state.studentList, data]
    })
  }
  handleRemove = (index) => {
    const newData = this.state.studentList.filter((item, findex) => findex !== index)
    this.setState({
      studentList: newData
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
    console.log('table', this.state.studentList)
    return (
      <div className='container text-center' style={{ padding: '40px', marginTop: '40px' }}>
        <AddStudent studentInfo={this.addStudent}/>
        <Table responsive>
          <thead className='head'>
          <tr>
            <th onClick={() => this.sortName()}>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Action</th>
            </tr>
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

export default MultiComponent;