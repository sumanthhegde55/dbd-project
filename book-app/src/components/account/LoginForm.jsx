import React, { Component , useContext, useState} from "react";
import { AccountContext } from '../context/AccountProvider';
import "./style.css";
import { GoogleLogin } from "react-google-login";
import { clientId } from "../constants";
import axios from 'axios';

const LoginForm = () =>{

      const {setOpenLogin,setAccount,setOpenSignup} = useContext(AccountContext);

      const [email,setemail] = useState("");
      const [password,setpassword] = useState("");
      const [errors,seterrors] = useState({email: "",password: "",});

        const onLoginFailure = () => {
            console.log("failed");
        };
        const onLoginSuccess = (res) => {
            alert("Successfully logged in!");
            console.log(res.profileObj);
            const user = {
              f_name : res.profileObj.givenName,
              l_name : res.profileObj.familyName,
              e_mail : res.profileObj.email,
              
            }
            setAccount(res.profileObj);
            setOpenLogin(false)
            setOpenSignup(false) // not required just to be safe set to false
        };

        const handleChange = (event) => {
            event.preventDefault();
            const { name, value } = event.target;
            switch(name){
                case "email": setemail(value);
                case "password": setpassword(value);
                default: break;
            }
        };

        const handleSubmit = async (event) => {
            event.preventDefault();
            try{
                const user = {
                    "email" : email,
                    "password" : password,
                }
                await axios.post('http://localhost:8000/users',user)
                .then((res) => {
                  if(res != {}){
                    alert("Successfully logged in!");
                    setAccount(res)
                  }
                })
                .catch((err) => console.log(err))
            }catch(e){
                console.log("error : ",e);
            }
            setOpenLogin(false);
            setOpenSignup(false); // not required just to be safe set to false
        };
    return (
      <div className="wrapper" style={{height:'auto'}}>
        <div className="form-wrapper">
          <h2>Login To Account</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                noValidate
              />
              {errors.password.length > 0 && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="submit">
              <button>Submit</button>
            </div>
            <div className="divider">OR</div>
            <GoogleLogin
              clientId={clientId}
              isSignedIn={false}
              buttonText="Login with Google"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
            />
          </form>
        </div>
      </div>
    );
}
export default LoginForm;
