import { Container,Button, Card, CardTitle, CardBody } from "reactstrap";
import React,{ useEffect} from "react";
const AboutUs=()=>{
    useEffect(()=>{
        document.title="AboutUs || Lets Begin Online Grocery Shopping!!";
},[]);
    return(
        
    <div >
       
       <Card className="text-center" border="success" >
        <CardBody>
            <CardTitle><h3>AboutUs</h3></CardTitle>
            
            <p> 
                   WelCome to Buy Online Groceries
                   This is Online Website  Design for Buying Groceries Online.
                   We Belive in Quality over Quantity
                   You can Choose What you want and how much!!!

            </p>
            
        </CardBody>
        </Card>  
     </div>
    );
};
export default AboutUs;