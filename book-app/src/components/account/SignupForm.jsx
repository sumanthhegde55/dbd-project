import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import { GoogleLogin } from "react-google-login";
import { clientId } from "../constants";
import axios from 'axios';
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

const onLoginFailure = () => {
  console.log("failed");
};
const onLoginSuccess = (res) => {
  console.log("Login successfull", res.profileObj);
  // setAccount(res);
};

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      username:null,
      errors: {
        email: "",
        password: "",
        username:""
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
            try{
                const user = {
                    "firstName": this.state.firstName,
                    "lastName" : this.state.lastName,
                    "email" : this.state.email,
                    "password" : this.state.password,
                }
                // await axios.post(`http://localhost:8000/add`,user)
                // .then((res) => console.log("response from server : ",res))
                // .catch((err) => console.log("error from server : ",err))
                await axios.post('http://localhost:8000/users/add',user)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            }catch(e){
                console.log("error : ",e);
            }
     } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Create Account</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="fullName">
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                  noValidate
                />
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                  noValidate
                />
              </div>
            </div>
            <div className="password">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                onChange={this.handleChange}
                noValidate
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                noValidate
              />
              {errors.password.length > 0 && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="submit">
              <button>Create</button>
            </div>
            <div className="divider">OR</div>
            <GoogleLogin
              clientId={clientId}
              isSignedIn={true}
              buttonText="Sign up with Google"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
            />
          </form>
        </div>
      </div>
    );
  }
}
