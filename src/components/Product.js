import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import "./Product.css"
export class Product extends Component {
    render(){
        return(
          <div className="cover">
            <FontAwesomeIcon className="icon3" icon={faCartPlus} />
            <h1>Add New Product</h1>
           
            <input className="empinput" type="text" placeholder="product name"/>
            
            <input className="empinput" type="text" placeholder="price"/>
            <input className="empinput" type="text" placeholder=" product Type"/>
           
            <input className="empinput" type="text" placeholder="amount"/>
           
           <div className="alt">
                <div >
                  <input className="fb" type="submit" value="Add"/>
                </div>
                <div >
                <input className="gog" type="reset" value="reset"/>
                </div>
            </div>
          </div>

        )
    }
}