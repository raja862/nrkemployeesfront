import React from "react"
import { NavLink } from "react-router-dom"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
const Header=()=>{

    return(<div>
    
    {/* <Navbar className="header" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">NRK Org Employees</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Add Employees</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <span className="navbar-brand">NRK ORG Employeelist</span>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink className="nav-item nav-link active" to="/" >Home </NavLink>
      <NavLink className="nav-item nav-link" to="/employee/add">ADD EMPLOYEE</NavLink>
      <NavLink className="nav-item nav-link" to="/contact" >Contact Us</NavLink>
  
    </div>
  </div>
</nav>

  
    </div>)
}
export default Header