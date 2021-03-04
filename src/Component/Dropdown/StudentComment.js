import React,{Component} from 'react'
import axios from 'axios';
class StudentComment extends Component{
    constructor(props){
        super(props);
        this.state={
            studentComment:[]
        }
    }
    reciveddata=()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments/')
        .then((res)=>{
            console.log(res)
            this.setState({
                studentComment:res.data
            })
        })
    }
    componentDidMount(){
        this.reciveddata()
    }
    render(){
        return(
            <div >
            {this.state.studentComment.map((item,index)=>
                <div key={index} className='comment-cont' >
                <div className='comment'>
                <div >
                <h5>Name:  <small>{item.name}</small></h5></div>
                <div>
                <h5>Email: <small>{item.email}</small></h5></div>
                </div>
                <div className='comment-body'><p>{item.body}</p></div>
                </div>
            )}
            </div>
        )
    }
}  
export default StudentComment;