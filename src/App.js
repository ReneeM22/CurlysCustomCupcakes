import React, { Component } from "react";
import "./App.css";
import Home from "./components/homeComponent";
import CakeButton from "./components/CakeButton";
import FrostingButton from "./components/FrostingButton";
import ToppingsButton from "./components/ToppingsButton";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Jumbotron,
} from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar style={{ background: "pink" }}>
          <NavbarBrand style={{ color: "hotpink" }}>
            Curly's Custom Cupcakes
          </NavbarBrand>
          <Nav>
            <NavItem>Home |</NavItem>
            <NavItem>| Curly's Story | </NavItem>
            <NavItem>| Contact | </NavItem>
            <NavItem>| Account</NavItem>
          </Nav>
        </Navbar>
        <CakeButton />
        <FrostingButton />
        <ToppingsButton />
      </div>
    );
  }
}

export default App;
