import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import "./Navigation.css"
import { NavLink } from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap';


export class Navigation extends Component{
    render(){
        return(
            <Navbar >
            <Nav className="nav">
            <NavLink className="Nlink"
            to="/">Home</NavLink>
             <NavLink className="Nlink"
            to="/Employee">Employee</NavLink>
             <NavLink className="Nlink"
            to="Product">Product</NavLink>
       <FontAwesomeIcon className="icon2" icon={faBars} />
            </Nav>
      
            </Navbar>
        )
    }
}