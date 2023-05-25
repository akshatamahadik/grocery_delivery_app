import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {Card,CardBody,CardSubtitle,CardText,Button,Container,CardTitle} from "reactstrap";

import base_url from "../api/bootapi";

const Grocery=({grocery,update})=>{

  //delete grocery
  const deleteGrocery=(id)=>{
    axios.delete(`${base_url}/groceries/${id}`).then(
      (response)=>{
        console.log(response.data);
        toast.success("Groceries  deleted");
        update(id);
      },)
       .catch((error)=>{
        console.error(error);
        toast.error("Groceries  deleted");
      });
  }
  
  //form handler function
  const handleForm=(e)=>{
    console.log(grocery);
    postDatatoServer(grocery);
    e.preventDefault();
}
//creating function to post data on server
const postDatatoServer=(data)=>{
axios.post(`${base_url}/groceries`,data).then(
    (response)=>{
        console.log(response);
        console.log("success");
        toast.success("Groceries deleted successfully",{position:"bottom-center"});
    },
    (error)=>{
        console.log(error);
        console.log("error");
        toast.error("Something went wrong ",{position:"bottom-center"});
    }
);
};
return (
    <Card className="text-center">
    <CardBody>
          <CardSubtitle className="font-weight-bold">ID       : {grocery.id}</CardSubtitle>
          <CardSubtitle className="font-weight-bold">Name     : {grocery.name}</CardSubtitle>
          <CardSubtitle className="font-weight-bold">Price    : {grocery.price}</CardSubtitle>
          <CardSubtitle className="font-weight-bold">Quantity : {grocery.quantity}</CardSubtitle>
          <CardSubtitle className="font-weight-bold">Unit     : {grocery.unit}</CardSubtitle>
          <CardText>{grocery.description}</CardText>  
          <Container className="text-center">
              <Button color="danger" onClick={()=>{
                deleteGrocery(grocery.id);
              }} >Delete</Button>{' '}

              
              <Button color="warning  ml-5" type="submit" href="/update-groceries">Update</Button>
          </Container>
    </CardBody>
  </Card>
);  
};
export default Grocery;