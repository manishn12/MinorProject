import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import "../styling/Signup.css";
import '../styling/bootstrap.min.css';
//import axios from 'axios';


function Signup() {

    const history = useHistory();
   const [error,setError] = useState(0);
   const [checked,setCheck] = useState(0);
    const [user, setUser] = useState({
        name:"", mail:"", password:"", cpassword:""
    })

    let name, value;
    const handle = (e) => {
        console.log(e);

        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]: value});
    }

    const sendPost = async (e) => {
        e.preventDefault();
        const { name, mail, password, cpassword } = user;

      if(name === "" || mail==="" || password ==="" || cpassword === "" || password !== cpassword){
        setError(1);
      }else{
        

        {/* this code is used for sending ur data to /register route it is like a postman */}
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, mail, password, cpassword
            })
        })     

        const data = await res.json();
        if(data.sum === 0 || !data){
            window.alert("invalid login");
            console.log("invalid login");
        }else{
            window.alert("success login");
            console.log("success login");

            history.push("/login");
        }
      }  
    }

const handleCheck  =(e)=>{
  setCheck(!checked);
}

    return (
        <div style={{backgroundColor:"#eee",height:"100%"}} >
           {/* <h1>register</h1>
            <form method="POST">
                <input type="text" name="name" value={user.name} onChange={handle} />
                <input type="email" name="mail" value={user.mail} onChange={handle} />
                <input type="text" name="job" value={user.job} onChange={handle} />
                <input type="number" name="phone" value={user.phone} onChange={handle} />
                <input type="password" name="passvord" value={user.passvord} onChange={handle} />
                <input type="password" name="cpassvord" value={user.passvord} onChange={handle} />
                <input type="submit" name="submit"  value="register" onClick={sendPost} />
           </form>  */}
           {/* <div className="container register-form">
            <form  method="POST">
             
                  <h1 className="text-center">Sign Up for Free</h1>
                  <p>Please fill in this form to create an account.</p>
                  
                <br/ >
               
                  <label for="name"><b>Name:</b></label><br/>
                  <input type="text" placeholder="Enter Name" name="name" value={user.name} onChange={handle} id="name" required />
                  <br />
                  <label for="email"><b>Email:</b></label><br/>
                  <input type="text" placeholder="Enter Email" name="mail" value={user.mail} onChange={handle} id="email" required />
                <br />
                  <label for="psw"><b>Password:</b></label><br/>
                  <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handle} id="psw" required />
                <br />
                  <label for="psw-repeat"><b>Confirm Password</b></label><br/>
                  <input type="password" placeholder="Repeat Password" name="cpassword" value={user.cpassword} onChange={handle} id="psw-repeat" required />
                  
                <br />
    
                  <button type="submit" className="registerbtn" onClick={sendPost}>Register</button>
                  </form>  */}
              

                {/* <div className="container signin">
                   <p>Already have an account? <NavLink to="/login">Sign in</NavLink>.</p>
                </div> */}
            {/* </div> */}


            <section >
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <p class="text-center  mx-md-4 " style={error ==1 ?{color:"red"}: {display:"none"}}>Fill the required Details</p>
                <form class="mx-1 mx-md-4" method="POST">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example1c">Your Name</label>
                      <input type="text"  class="form-control" placeholder="Enter Name" name="name" value={user.name} onChange={handle} id="name" required />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example3c">Your Email</label>
                      <input type="email"  class="form-control" placeholder="Enter Email" name="mail" value={user.mail} onChange={handle} id="email" required />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4c">Password</label>
                      <input type="password" class="form-control" placeholder="Enter Password" name="password" value={user.password} onChange={handle} id="psw" required />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4cd">Repeat your password</label>
                      <input type="password"  class="form-control" placeholder="Repeat Password" name="cpassword" value={user.cpassword} onChange={handle} id="psw-repeat" required />
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input
                    onChange={handleCheck}
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      required
                    />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" onClick={sendPost} class="btn  btn-lg" style={{backgroundColor:"rgb(197 17 98)"}} disabled={checked == 0 &&  "true"}>Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Register image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default Signup
