import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Table, Button } from 'react-bootstrap';
import {
  BrowserRouter,Route,Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import MiddlePart from'./Component/View/MiddlePart';
import Privateroute from './Router/PrivateRoutes';
// import Footer from './Component/Footer/Footer'
import StudentPhoto from './Component/Dropdown/StudentPhoto';
import Login from './Component/Auth/Login';
import SignUp from './Component/Auth/SignUp';
import MultiComponent from './Default/MultiComponent'
import StudentComment from './Component/Dropdown/StudentComment'
import StudentPost from './Component/Dropdown/StudentPost'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
       
        <Switch>
        <Route exact path='/default-student-operation' component={MultiComponent}/>
            <Route exact path='/' component={MiddlePart}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/studentPhoto' component={StudentPhoto}/>
            <Route exact path='/studentpost' component={StudentPost}/>
            <Route exact path='/studentComment' component={StudentComment}/>
            
            </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
