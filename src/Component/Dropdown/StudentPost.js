import React,{Component} from 'react'
import axios from 'axios'
class StudentPost extends Component{
    constructor(props){
        super(props);
        this.state={
            studentPost:[]
        }
    }
    reciveddata=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((res)=>{
            console.log(res)
            this.setState({
                studentPost:res.data
            })
        })
    }
    componentDidMount(){
        this.reciveddata()
    }
    render(){
        return(
            <div >
            {this.state.studentPost.map((item,index)=>
                <div key={index} className='post-cont'>
                <div className='title'>
                <h4>{item.title}</h4></div>
                <div className='post'><p>{item.body}</p></div>
                </div>
            )}
            </div>
        )
    }
}
export default StudentPost;