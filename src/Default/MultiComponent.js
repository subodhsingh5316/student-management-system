import { Component } from 'react';
import { Table, Button, OverlayTrigger,Tooltip, Modal  } from 'react-bootstrap';
import {FaTrash} from 'react-icons/fa'
class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      name: '',
      email: '',
      phone: '',
      dob: '',
      disable:true
    }
  }
  handleSubmit = () => {
    this.props.studentInfo({ name: this.state.name, 
      email: this.state.email, phone: this.state.phone, dob: this.state.dob })

  }
  handleName = (e) => {
    console.log('event call', e.target.value)
    this.setState({
      name: e.target.value,
      disable:false
    })

  }
  render() {
    console.log('add student',this.state.studentList)
    return (
      <div style={{textAlign:'center'}} >
       
        <div className='row col-12 my-4 mx-4 text-align-center'>
          <input type='text' required className='form-control col-md-5 mx-2 my-4' placeholder='Enter name' onChange={(e) => this.handleName(e)} />
          <input type='email' required className='form-control col-md-5 mx-2 my-4 ' placeholder='Enter email' onChange={(e) => this.setState({ email: e.target.value })} />
          <input type='number' required className='form-control col-md-5 mx-2 my-1' placeholder='Enter phone' onChange={(e) => this.setState({ phone: e.target.value })} />
          <input type='date' required className='form-control col-md-5 mx-2 my-1' placeholder='Enter dob' onChange={(e) => this.setState({ dob: e.target.value })} />
        </div>
        <Button className='primary my-4 ' disabled={this.state.disable} onClick={() => this.handleSubmit()}>Submit </Button>
      </div>
    )
  }
}
class MultiComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [
        {
          name:"Sri Ram",
          email:'ram@gmail.com',
          phone:"638489876",
          dob:'15-02-1996'
        }
      ],
      name: '',
      email: '',
      phone: '',
      dob: '',
      isShow:false,
      student_index:0

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
      studentList: newData,
      isShow:false
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
  handleOpen=()=>{
    this.setState({
      isShow:true
    })
  }
  handleClose=()=>{
    this.setState({
      isShow:false
    })
  }

  render() {
    console.log('table', this.state.studentList)
    return (
      <div  className='container'>
        <AddStudent studentInfo={this.addStudent}/>
        <Modal show={this.state.isShow} onHide={this.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to remove this item ? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            No
          </Button>
          <Button variant="danger"  onClick={() => this.handleRemove(this.state.student_index)}>
           Yes
          </Button>
        </Modal.Footer>
      </Modal>
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
                <td>
                {['bottom'].map((placement) => (
                  <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                       Delete
                      </Tooltip>
                    }
                  >
                 < FaTrash  onClick={() => this.setState({isShow:true,student_index:index})}/>
                  </OverlayTrigger>
                ))}
               </td>
              </tr>

            )}
          </tbody>
        </Table>
      </div>

    )
  }
}

export default MultiComponent;
