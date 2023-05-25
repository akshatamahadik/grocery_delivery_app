import logo from'./logo.svg';
import'./App.css';
import { Button, Container, Row ,Col} from 'reactstrap';

import React,{useEffect,useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  RouterProvider
} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import AllGrocery from './Components/AllGrocery';
import AddGroceries from './Components/AddGroceries';
import Menus from './Components/Menus';
import UpdateGroceries from './Components/UpdateGroceries';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div>
        
        <ToastContainer/>
          <Header/>
                <Container>
                    <div className="row">
                        <div className="col-4 col-md-4"><Menus/></div>
                        <div className="col-8 col-md-8">
                          <Router>
                              <Routes>
                                  <Route path="/" element={<Home />} exact/>
                      
                                  <Route path="/add-groceries" element={<AddGroceries />} exact/> 
                        
                     
                                  <Route path="/view-groceries"element={<AllGrocery  />} exact/>

                                  <Route path="/update-groceries"element={<UpdateGroceries />} exact/>
                                  <Route path='/about-us' element={<AboutUs />}  exact/>
                                  <Route path='/contact-us' element={<ContactUs />}  exact/>

                        
                              </Routes>
                          </Router>
                          
                           
                            
                        </div>
                    </div>
                </Container>

        
      
    </div>
   
  );
}

export default App;