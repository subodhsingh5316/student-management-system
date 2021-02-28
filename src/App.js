import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Table, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Privateroute from './Router/PrivateRoutes';


class App extends Component {
   
  render() {
    return (
      <div className='container text-center' style={{ padding: '40px', marginTop: '40px' }}>
      <Router>
      <Privateroute/>
      </Router>
      </div>

    )
  }
}

export default App;
