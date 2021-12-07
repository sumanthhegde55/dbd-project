import React, {useContext, useState}from 'react'
import {AppBar,Toolbar, Typography, Button,makeStyles,Box} from '@material-ui/core';
import Login from './account/Login';
import Signup from './account/Signup';
import { AccountContext } from '../components/context/AccountProvider';

const NavBar = () => {
    const [login,setLogin] = useState({color:'#fffff',status:false});
    const [signup,setSignup] = useState({color:'#fffff',status:false});
    const {account,setAccount} = useContext(AccountContext);
    console.log(login,signup)
    const classes = makeStyles({
        component:{
            display:'flex',
            marginLeft:'auto',
            paddingLeft:'100px',
            '& > *':{
                paddingRight: '50px'
            }
        },
        appbar:{
            color:'#fff'
        },
        signup:{
            color:`${signup.color}`,
            textAlign:'center',
            cursor:'pointer'
        },
        login:{
            color:`${login.color}`,
            textAlign:'center',
            cursor:'pointer'
        }
    })();
    const handleSignup = () =>{
        const newsignup = {...signup,
            color:'rgba(0,256,0,0.5)',
            status:true
        }
        const newlogin = {
            ...login,
            color:'#fff',
            status:false
        }
        setSignup(newsignup);
        setLogin(newlogin);
    }
    const handleLogin = () =>{
        const newsignup = {...signup,
            color:'#fff',
            status:false
        }
        const newlogin = {
            ...login,
            color:'rgba(0,256,0,0.5)',
            status:true
        }
        setLogin(newlogin);
        setSignup(newsignup);
    }
    const handleLogout = () =>{
        setAccount(null);
    }
    return (
        <>
        <AppBar className ={classes.appbar}>
            <Toolbar>
                <Typography>BEST-READS</Typography>
                <Box className = {classes.component}>
                    {
                    account === null? 
                    <>
                         <Button className={classes.signup} onClick={handleSignup}>Signup</Button> 
                         <Button className={classes.login} onClick={handleLogin}>Login</Button>
                    </> : 
                    <>
                        <Button className={classes.signup} onClick={handleSignup}>Search Books</Button> 
                         <Button className={classes.login} onClick={handleLogout}>Logout</Button>
                    </>
                    }
                </Box>
            </Toolbar>
        </AppBar>
        {signup.status ? <Signup signup={signup} setSignup={setSignup}/> : null};
        {login.status ? <Login login={login} setLogin={setLogin} /> : null};
        </>
    )
}

export default NavBar