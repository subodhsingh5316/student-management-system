import React from 'react'
import { Navbar,NavbarBrand,NavbarToggle,NavbarCollapse,NavDropdown,FormControl,Button,Form,Nav } from 'react-bootstrap';

class Header extends React.Component{

    render(){
        return(
            <React.Fragment>
             
             <Navbar  style={{backgroundColor:'#DC143C'}} expand="lg">
             <Navbar.Brand href="/" className="text-white font-weight-800">STUDENT</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                 <Nav.Link href="/default-student-operation">Home</Nav.Link>
                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                 <NavDropdown.Item href='/studentpost'> Post</NavDropdown.Item>
                 <NavDropdown.Item href="/studentphoto"> Photo</NavDropdown.Item>
                 <NavDropdown.Item href="/studentcomment">Comment</NavDropdown.Item>
             </NavDropdown>
               </Nav>
               <Form inline>
               <Nav.Link href="/signup" className="text-white">SignUp</Nav.Link>
               
               <Button variant="primary" href="/login" type="submit">Login
             
          </Button>
               </Form>
             </Navbar.Collapse>
           </Navbar>
           
            </React.Fragment>
        )
    }
}
export default Header;