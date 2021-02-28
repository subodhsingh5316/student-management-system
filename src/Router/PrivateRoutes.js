import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import AddStudent from '../Component/Student/AddStudent';
import EditStudent from '../Component/Student/EditStudent';
import StudentList from '../Component/Student/StudentList';
  

class Privateroute extends React.Component {
    render() {
        return (
            <Switch>
            <Route exact path='/' component={StudentList}/>
            <Route exact path='/add-student' component={AddStudent}/>
            <Route exact path='/edit-student/:id' component={EditStudent}/>
            </Switch>
        )
    }
}

export default Privateroute;