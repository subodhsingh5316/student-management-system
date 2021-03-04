import React, { Component } from 'react'
import { Button, Table, Card, Title, Text, Body } from 'react-bootstrap'
import axios from 'axios'
class StudentPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentPhoto: []
        }
    }
    recivedata = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                console.log(res)
                this.setState({
                    studentPhoto: res.data
                })
            })
    }
    componentDidMount() {

        this.recivedata();
    }
    removedata = (id) => {
        axios.delete('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                console.log(res)
                this.recivedata()
            })
    }
    render() {
        return (
            <div class='wrapper'>
                <div className='container'>
                    <div className='container-fuild row col-12'>
                        {this.state.studentPhoto.map((item, index) =>
                            <Card style = {{margin:10}} className='col-md-3' key={index} >
                                <Card.Img variant="top" src={item.url} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        {item.title}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )}
                    </div>
                </div>
            </div>

        )
    }
}
export default StudentPhoto;