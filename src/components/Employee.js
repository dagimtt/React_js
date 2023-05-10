import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPersonCirclePlus} from '@fortawesome/free-solid-svg-icons';
import "./Order.css"
export class Employee extends Component {
    render(){
        return(
          
          <div className="cover1">
    <FontAwesomeIcon className="icon1" icon={faPersonCirclePlus} />


          <h1>Add New Employee</h1>
           
           <input className="empinput" type="text" placeholder="employee name"/>
           
           <input className="empinput" type="text" placeholder="contact"/>
           <input className="empinput" type="text" placeholder="join date"/>
          
           <input className="empinput" type="text" placeholder="address"/>
          
          <div className="alt">
               <div >
                 <input className="fbb" type="submit" value="Add"/>
               </div>
               <div >
               <input className="goog" type="reset" value="reset"/>
               </div>
           </div>
          </div>

        )
    }
}