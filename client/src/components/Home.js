import React from 'react';
import '../styling/Home.css';
import '../styling/bootstrap.min.css';
import mlIcon from '../styling/images/machine-learning.png';
import {Link} from 'react-router-dom'
import Guest from './Guest';
import Button from '@material-ui/core/Button';

function Home() {
    return (
        <div className="container">
          <div className="row" style={{marginTop:"10%"}}>
              <div className="col-lg-7 col-sm-12">
                <img className="img" src={mlIcon} height="100%" width="100%"/>
              </div>
              <div className="col-lg-5 col-sm-12">
              <h3 style={{color:"rgb(197 17 98)"}}><strong> PoseNet - TensorFlowJS </strong> </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
               <br/>
               <div className="buttons" style={{display:"flex"}}>
               <Button size="large" className="btn" color="secondary" variant="contained" component={Link} to="/demo">
  Demo
</Button>
<Button size="large" className="btn" variant="contained" color="secondary" component={Link} to="/login">
 Login
</Button>
<Button size="large" className="btn" color="secondary"  variant="contained" component={Link} to="/signup">
Join Now
</Button>
                 
               </div>
              </div>
          </div>

        </div>
    )
}

export default Home
