import React, {useContext,useState} from 'react'
import SignupForm from './SignupForm';
import { AccountContext } from '../context/AccountProvider';
import {Dialog} from '@material-ui/core';

const Signup = ({signup,setSignup}) => {
    const {openSignup,setOpenSignup} = useContext(AccountContext);
    const handleClose = () =>{
        setOpenSignup(false);
        const newsignup = {...signup,status:false,color:'#fff'};
        setSignup(newsignup);
    }
    // console.log(account);
    return (
        <Dialog
        open={openSignup}
        onClose={handleClose}
      ><SignupForm/>
      </Dialog>
    )
}

export default Signup
