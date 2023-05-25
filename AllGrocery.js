import React, { useState,useEffect } from "react";
import Grocery from "./Grocery";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { List } from "reactstrap";

const AllGrocery=() => {

    useEffect(() => {
            document.title="All Groceries || Lets Buy Grocery";
    });

    //Function to call servers
    const getAllGroceryFromServer=()=>{
        axios.get(`${base_url}/groceries`).then(
            (response) => {
                //For Success
               // console.log("Success");
                console.log(response.data);
                toast.success("Groceries has been loaded",{position:"bottom-center"});
                setgroceries(response.data);
            },
            (error) => {
                //For Error
                console.log("Error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }

        );
    };

    
    //calling loading server function
    useEffect(()=>{
        getAllGroceryFromServer();
        },[]);

    const [groceries,setgroceries]=useState([]);

    const updateGroceries=(id)=>{
        setgroceries(groceries.filter((c)=>c.id!=id));
    };

    
    return(
        <div>
            <h1>All Groceries</h1>
            <p>list of Groceries as follows</p>
                {groceries.length > 0 
                  ?groceries.map((item) => <Grocery key={item.id} grocery={item}/>) 
                  :"No Groceries"}
                </div>
    );
};

export default AllGrocery;