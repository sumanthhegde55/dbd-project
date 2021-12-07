import React, {useContext,useState} from 'react'
// import {GoogleLogin} from 'react-google-login';
// import { AccountContext } from '../context/AccountProvider';
import {Dialog} from '@material-ui/core';
const Login = ({login,setLogin}) => {
    const [open,setOpen] = new useState(true)
    const handleClose = () =>{
        setOpen(false)
        const newlogin = {...login,status:false}
        setLogin(newlogin)
    }
    // const clientId = '302216821423-ee78r5k3q8jm583lebntmjkh90qinhsr.apps.googleusercontent.com';
    // const {setAccount} = useContext(AccountContext);

    // const classes = useStyles();

    // const onLoginFailure = () =>{
    //     console.log("failed");
    // }
    // const onLoginSuccess = (res) =>{
    //     console.log('Login successfull',res.profileObj);
    //     // setAccount(res);
    // };
    return (
        <>
      <Dialog
        open={open}
        onClose={handleClose}
      >Login
      </Dialog>
        {/* <GoogleLogin
            clientId = {clientId}
            isSignedIn={true}
            buttonText=""
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={'single_host_origin'}
        /> */}
        </>
    )
}

export default Login
