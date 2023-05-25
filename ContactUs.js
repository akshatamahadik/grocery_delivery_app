import { Container,Button, Card, CardTitle, CardBody } from "reactstrap";
import React,{ useEffect} from "react";
const ContactUs=()=>{
    useEffect(()=>{
        document.title="ContactUs || Lets Buy Groceries.";
},[]);
    return(
        
    <div >
       
       <Card className="text-center" border="success" >
        <CardBody>
            <CardTitle><h3>ContactUs From Given HelplineNo :  </h3></CardTitle>
            
            <p> 
                   <h4 >PhoneNo : 456-456-666;</h4>
            </p>
            
        </CardBody>
        </Card>  
     </div>
    );
};
export default ContactUs;