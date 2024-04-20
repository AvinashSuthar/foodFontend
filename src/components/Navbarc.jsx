import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbarc.css';
function Navbarc() {
  const [colorChange, setColorchange] = useState(false);
  const navigate = useNavigate();
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate('/login');
  }
  return (
    <>
      <div>
        <Navbar expand="md" fixed="top" className={colorChange
          ? "navbar colorChange header  navbar-expand-lg  navbar-dark"
          : "navbar header  navbar-expand-lg  navbar-dark"} >
          <Container className=''>
            <Link className="h4 nav-link fst-italic text-white  active" to="/">ForFoody</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="ms-auto navBar    my-2 my-lg-0"
                style={{ maxHeight: '200px' }}
                navbarScroll >
                <div className='d-fle navbarOptions'>
                  <Link className="nav-link active ms-4" to="/">Home</Link>
                  {/* <Link className="nav-link active ms-4" on to="/">My Orders</Link> */}
                  {(localStorage.getItem("authToken"))
                    ?
                    <>
                    <Link className="nav-link active ms-4" to="/" onClick={handleLogout}>Logout</Link>
                    {/* <Link className="nav-link active ms-4" to="/" onClick={handleLogout}>My Cart</Link> */}

                    </>
                    :
                    <>
                      <Link className="nav-link active ms-4" to="/login">Login</Link>
                      {/* <Link className="nav-link active ms-4" to="/createuser">Sign Up</Link> */}
                    </>
                  }
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}
export default Navbarc