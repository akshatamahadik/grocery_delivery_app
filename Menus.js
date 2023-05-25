import React from "react";
import { Link } from "react-router-dom";
import {ListGroup,ListGroupItem} from 'reactstrap';
const Menus=()=>{
    return(
        <ListGroup>
          <ListGroupItem tag="a" href="/Home">Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-groceries">Add Groceries</ListGroupItem>
            <ListGroupItem tag="a" href="/update-groceries">Update Groceries</ListGroupItem>
            <ListGroupItem tag="a" href="/view-groceries">View Groceries</ListGroupItem>
            <ListGroupItem tag="a" href="/About-us">About Us</ListGroupItem>
            <ListGroupItem tag="a" href="/Contact-us">Contact</ListGroupItem>

        </ListGroup>
    );
    
}
export default Menus;