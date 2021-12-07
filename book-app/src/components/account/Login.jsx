import React, {useContext} from 'react'
import {Box} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import { AccountContext } from '../context/AccountProvider';
const Login = () => {
    const clientId = '302216821423-ee78r5k3q8jm583lebntmjkh90qinhsr.apps.googleusercontent.com';
    const {setAccount} = useContext(AccountContext);
    const onLoginFailure = () =>{
        console.log("failed");
    }
    const onLoginSuccess = (res) =>{
        console.log('Login successfull',res.profileObj);
        setAccount(res);
    };
    return (
        <>
        <Box>
            <Box>SignUp
            </Box>
            <Box>Login
            </Box>
        </Box>
        <GoogleLogin
            clientId = {clientId}
            isSignedIn={true}
            buttonText="hrrs"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={'single_host_origin'}
        />
        </>
    )
}

export default Login
