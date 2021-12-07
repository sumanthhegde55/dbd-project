import React, {useContext,useState} from 'react'
import SignupForm from './SignupForm';
// import {GoogleLogin} from 'react-google-login';
import { AccountContext } from '../context/AccountProvider';
import {Dialog} from '@material-ui/core';

const Signup = ({signup,setSignup}) => {
    const [open,setOpen] = new useState(true)
    const {account} = useContext(AccountContext);
    const handleClose = () =>{
        setOpen(false);
        const newsignup = {...signup,status:false,color:'#fff'};
        setSignup(newsignup);
    }
    console.log(account);
    return (
        <Dialog
        open={account === null && open}
        onClose={handleClose}
      ><SignupForm/>
      </Dialog>
    )
}

export default Signup
