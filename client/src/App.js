import React from "react";
import './App.css'
import Home from "./components/Home";
import {BrowserRouter, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Guest from './components/Guest'

const App = () =>{
  return(
    <>
       {/* <Navbar /> */}
      <BrowserRouter>
      <Route exact path="/" component={Home} /> 
      <Route path="/demo" component={Guest}/>
       <Route path="/about" component={About} />    
       <Route path="/contact" component={Contact} /> 
       <Route path="/login" component={Login} />
       <Route path="/signup" component={Signup} />
       </BrowserRouter>  
                 {/* note the path must matches with the path given in the navbar */}
                 {/* because as clicking the navbar link its url will change and the changed url will change the path */}
                 {/* of current route and it will render the corresponding component */}
    </>
  )
}

export default App;