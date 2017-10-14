import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      render() {
        return (
        <div>
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/" className="Navbar-brand">
                    <b>ENTER JOSEPH</b>
                </NavbarBrand>

                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>

                <Nav className="ml-auto" navbar>
                    <NavItem className="Nav-item">
                        <NavLink href="https://twitter.com/jsphbtst" onClick={this.toggle}>
                            Twitter
                        </NavLink>
                    </NavItem>

                    <NavItem className="Nav-item">
                        <NavLink href="https://medium.com/@jsphbtst" onClick={this.toggle}>
                            Medium
                        </NavLink>
                    </NavItem>

                    <NavItem className="Nav-item">
                        <NavLink href="https://github.com/jsphbtst" onClick={this.toggle}>
                            GitHub
                        </NavLink>
                    </NavItem>

                    <NavItem className="Nav-item">
                        <NavLink href="#ContactMe" onClick={this.toggle}>
                            Contact Me
                        </NavLink>
                    </NavItem>
                </Nav>

                </Collapse>
            </Navbar>
          </div>
        );
    }
}
export default Header;