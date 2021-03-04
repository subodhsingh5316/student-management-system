import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import AddStudent from '../Component/Student/AddStudent';
import EditStudent from '../Component/Student/EditStudent';
import StudentList from '../Component/Student/StudentList';
import Page from '../Component/Page/Page';
import MultiComponent from '../Default/MultiComponent'; 
import Login from '../Component/Auth/Login'
import  SignUp from '../Component/Auth/SignUp'

class Privateroute extends React.Component {
    render() {
        return (
            <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/' component={MultiComponent}/>
            <Route exact path='/student-list' component={StudentList}/>
            <Route exact path='/add-student' component={AddStudent}/>
            <Route exact path='/edit-student/:id' component={EditStudent}/>
            </Switch>
        )
    }
}

export default Privateroute;