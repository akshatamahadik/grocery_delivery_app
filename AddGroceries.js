import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const AddGroceries=()=>{
    useEffect(()=>{
        document.title="ADD Groceries || Lets Buy Online Groceries!";
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
            toast.error("Something went wrong ",{position:"bottom-center"});
        }
    );
};


    return (
        <Fragment>
        <h2 className="text-center my-3">Fill Grocery Details</h2>
        <Form onSubmit={handleForm}>

            <FormGroup>
                <label for="id">Grocery Id</label>
                <Input
                        Type="text"
                        placeholder="Enter GroceryID here"
                        name="id"
                        Id="id"
                        onChange={(e)=>{
                            setgrocery({...grocery,id:e.target.value});
                        }}
                />
            </FormGroup>
            <FormGroup>
                <label for="name">Grocery Name</label>
                <Input
                        Type="text"
                        placeholder="Enter Groceryname here"
                        name="name"
                        Id="name"
                        onChange={(e)=>{
                            setgrocery({...grocery,name:e.target.value});
                        }}
                />
            </FormGroup>

            <FormGroup>
                <label for="quantity">Grocery quantity</label>
                <Input
                        Type="text"
                        placeholder="Enter Groceryquantity here"
                        name="quantity"
                        Id="quantity"
                        onChange={(e)=>{
                            setgrocery({...grocery,quantity:e.target.value});
                        }}
                />
            </FormGroup>

            <FormGroup>
                <label for="price">Grocery Price</label>
                <Input
                        Type="text"
                        placeholder="Enter GroceryPrice here"
                        name="price"
                        Id="price"
                        onChange={(e)=>{
                            setgrocery({...grocery,price:e.target.value});
                        }}
                />
            </FormGroup>
                
                <FormGroup>
                <label for="unit">Grocery unit (kg,gram,li)</label>
                <Input
                        Type="text"
                        placeholder="Enter  Unit here "
                        name="unit"
                        Id="unit"
                        onChange={(e)=>{
                            setgrocery({...grocery,unit:e.target.value});
                        }}
                />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Grocery</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear   </Button>
                </Container>
            
        </Form>
        </Fragment>

    );
    
};
export default AddGroceries;