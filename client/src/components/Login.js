import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../styling/Login.css";

function Login() {

    const history = useHistory();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState(0);


    const loginUser = async (e) => {
        e.preventDefault();
      
if(mail === "" || password === ""){
    setError(1);
}else{
    const res = await fetch('/signin', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mail, password
        })
    });
    const data = await res.json();
        if(data.sum === 0 || !data){
            window.alert("invalid login");
            console.log("invalid login");
        }else{
            window.alert("success login");
            console.log("success login");

            history.push("/");
        }
    }
}


    return (
        <div>
            {/* <form method="POST">
              <div class="container">
                 <h1>Login to Your Account</h1><br></br>
                 <label for="uname"><b>Email</b></label>
                 <input type="text" placeholder="Enter Email" name="mail" value={mail} onChange={(e) => setMail(e.target.value)} required />

                 <label for="psw"><b>Password</b></label>
                 <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                 <button type="submit" onClick={loginUser}>Login</button>
              </div>
            </form> */}
            <section class="">
  <div class="container h-100 ">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black shadow p-3 mb-5 bg-white" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login </p>
                <p class="text-center  mx-md-4 " style={error ==1 ?{color:"red"}: {display:"none"}}>Fill the required Details</p>
                <form class="mx-1 mx-md-4" method="POST">

                  

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example3c">Your Email</label>
                      <input type="email"  class="form-control" placeholder="Enter Email" name="mail" value={mail} onChange={(e)=>setMail(e.target.value)} id="email" required />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4c">Password</label>
                      <input type="password" class="form-control" placeholder="Enter Password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} id="psw" required />
                    </div>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" onClick={loginUser} disabled={(mail==="" || password ==="") && "true"} class="btn  btn-lg" style={{backgroundColor:"rgb(197 17 98)"}} >Login</button>
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

export default Login
