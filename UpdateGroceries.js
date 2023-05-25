import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const UpdateGroceries=()=>{
    useEffect(()=>{
        document.title="UPDATE Grocery || Lets Buy Grocery";
},[]);

    const [grocery,setgrocery]=useState({});

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
            toast.success("Grocery added successfully",{position:"bottom-center"});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something wenr wrong ",{position:"bottom-center"});
        }
    );
};


    return (
        <Fragment>
        <h1 className="text-center my-3">Update Grocery Details</h1>
        <Form onSubmit={handleForm}>

            <FormGroup>
                <label for="GroceryId">Grocery Id</label>
                <Input
                        Type="text"
                        placeholder="Enter GroceryID here"
                        name="GroceryId"
                        Id="GroceryId"
                        onChange={(e)=>{
                            setgrocery({...grocery,id:e.target.value});
                        }}
                />
            </FormGroup>
            <FormGroup>
                <label for="groceryname">Grocery name</label>
                <Input
                        Type="text"
                        placeholder="Enter Groceryname here"
                        name="groceryname"
                        Id="groceryname"
                        onChange={(e)=>{
                            setgrocery({...grocery,name:e.target.value});
                        }}
                />
            </FormGroup>
                
           

            <FormGroup>
                <label for="groceryPrice">Grocery Price</label>
                <Input
                        Type="text"
                        placeholder="Enter GroceryPrice here"
                        name="groceryPrice"
                        Id="groceryPrice"
                        onChange={(e)=>{
                            setgrocery({...grocery,price:e.target.value});
                        }}
                />
            </FormGroup>

            <FormGroup>
                <label for="groceryQuantity">Grocery Quantity</label>
                <Input
                        Type="text"
                        placeholder="Enter GroceryQuantity here"
                        name="groceryQuantity"
                        Id="groceryQuantity"
                        onChange={(e)=>{
                            setgrocery({...grocery,quantity:e.target.value});
                        }}
                />
            </FormGroup>
                
                <FormGroup>
                <label for="groceryunit">Grocery unit (kg,gram,li)</label>
                <Input
                        Type="text"
                        placeholder="Enter  Unit here "
                        name="groceryunit"
                        Id="groceryunit"
                        onChange={(e)=>{
                            setgrocery({...grocery,unit:e.target.value});
                        }}
                />
                </FormGroup>
           
                <Container className="text-center">
                    <Button type="submit" color="success">Update Groceries</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear   </Button>
                </Container>
            
        </Form>
        </Fragment>

    );
    
};
export default UpdateGroceries;