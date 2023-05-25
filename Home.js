import { Container, Button, Card, CardTitle, CardBody } from "reactstrap";
import React, { useEffect } from "react";
const Home = () => {
    useEffect(() => {
        document.title = "Home || Lets Begin Online Grocery Shopping!!";
    }, []);
    return (
           <div className="text-center my-5">
            <h3 className="my-5 bg-success">Lets Buy Online Grocery</h3>
            <div >
                <img src="Imges/Image.jpg" alt="Image" height="400" width="700" />

            </div>


        </div>
    );
};
export default Home;