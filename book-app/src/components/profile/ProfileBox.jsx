import EditIcon from '@material-ui/icons/Edit';
import React, { useState ,useContext} from 'react'
import { AccountContext } from '../context/AccountProvider';
import {validEmailRegex} from '../account/SignupForm';
import './style.css';

const ProfileBox = () => {

    const {account,setAccount,setProfile} = useContext(AccountContext);

    const [editFirstName,setEditFirstName] = useState(false);
    const [editLastName,setEditLastName] = useState(false); 
    const [editEmail,setEditEmail] = useState(false);
    let updateImage = false;

    const [email,setemail] = useState(account.e_mail);
    const [firstName,setFirstName] = useState(account.f_name);
    const [lastName,setLastName] = useState(account.l_name);
    const [image,setImage] = useState(account.image);
    // const classes = useStyles();
    console.log(account,email,firstName,lastName);
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        switch(name){
            case "email": setemail(value);
            break;
            case "firstName": setFirstName(value);
            break;
            case "lastName": setLastName(value);
            break;
            default: break;
        }
    };
    const handleSubmit = () =>{
        if(!validEmailRegex.test(email) || firstName.length === 0 || lastName.length === 0) {
          alert("invalid update!!!");
          return false; 
        }
        const newInfo = {
          ...account,
          f_name:firstName,l_name:lastName,e_mail:email,image
        };
        setEditEmail(false);
        setEditFirstName(false);
        setEditLastName(false);
        setAccount(newInfo);
        alert("update successfull");
        // update in db 
    }
    const handleClick = (x) =>{
        switch(x){
            case "email": setEditEmail(editEmail == true ? false : true);
            break;
            case "firstName": setEditFirstName(editFirstName == true ? false : true);
            break;
            case "lastName": setEditLastName(editLastName == true ? false :true);
            break;
            default: break;
        }
    }
    const handleLogout = () =>{
      setAccount(null);
      setProfile(false);
    }
    return (
      <div className="wrapper">
        <div className = "form" style={{width:'90%'}} noValidate>
            <div className="firstName"> 
              <label htmlFor="firstName" style={{color:'#fff'}}>First Name</label>
                {<input
                type="text"
                name="firstName"
                onChange={handleChange}
                disabled = {editFirstName ? "" : "disabled"}
                placeholder={firstName}
                />}
                <div style={{paddingLeft:'10px'}}>
               <EditIcon onClick = {() => handleClick('firstName')} style={{cursor:'pointer'}}/>
               </div>
              </div>
            <div className="lastName">
              <label htmlFor="lastName" style={{color:'#fff'}}>Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                disabled = {editLastName ? "" : "disabled"}
                placeholder={lastName}
              />
              <div style={{paddingLeft:'10px'}}>
              <EditIcon onClick = {() => handleClick('lastName')} style={{cursor:'pointer'}}/>
               </div>
            </div>
            <div className="email">
              <label htmlFor="email" style={{color:'#fff'}}>Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                disabled = {editEmail ? "" : "disabled"}
                placeholder={email}
                style={{marginLeft:'30px'}}
              />
              <div style={{paddingLeft:'10px'}}>
              <EditIcon onClick = {() => handleClick('email')} style={{cursor:'pointer'}}/>
               </div>
            </div>
            <input type="file" name="myImage" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}/>
            {
              (editFirstName || editLastName || editEmail || image !== account.image) ? 
          <div className="submit" onClick={handleSubmit}>
            <button>Update</button>
          </div>
          : null
          }
          <div className="submit">
        <button onClick = {handleLogout} style={{bottom:'auto'}}>Logout</button>
          </div>
        </div>
      </div>
    // </div>
    )
}

export default ProfileBox
