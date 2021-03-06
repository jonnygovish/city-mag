import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import CarouselPage from './carousel';
import '../App.css';
import Logo from '../img/Logo.png';

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  // handleScroll = e =>{
  //   e.preventDefault();
  //   const main = this.main.current;
  //   window.scrollTo({
  //     top:main.offsetTop,
  //     left: 0,
  //     behaviour: "instant"
  //   });
  // }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="unique-color-dark" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <img src = {Logo} alt= "logo" />
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    {/* <MDBNavLink to="/publicity">Publicity</MDBNavLink> */}
                    < a className="nav-link Ripple-parent" href = "#publicity" > Publicity </a> 
                  </MDBNavItem>
                  <MDBNavItem>
                    {/* <MDBNavLink href="#test" to=""> Media Kit</MDBNavLink> */}
                    < a className="nav-link Ripple-parent" href = "#test" > Media Kit </a>       
                  </MDBNavItem>
                  <MDBNavItem>
                    {/* <MDBNavLink to="#">Our intention</MDBNavLink> */}
                    < a className="nav-link Ripple-parent" href = "#intention" > Our Intention </a>  
                  </MDBNavItem>
                  <MDBNavItem>
                    {/* <MDBNavLink to="#">How Its Done</MDBNavLink> */}
                    < a className="nav-link Ripple-parent" href = "#done" > How Its Done </a> 
                  </MDBNavItem>
                  <MDBNavItem>
                    {/* <MDBNavLink to="#">Contact</MDBNavLink> */}
                    < a className="nav-link Ripple-parent" href = "#contact" > Contact </a> 
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          {/* <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <h2>This Navbar is fixed</h2>
              <h5>It will always stay visible on the top, even when you scroll down</h5>
              <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
            </MDBMask>
          </MDBView> */}
          
        < CarouselPage />
        </header>
        
        {/* <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main> */}
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;