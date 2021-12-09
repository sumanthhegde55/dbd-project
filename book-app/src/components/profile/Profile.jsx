import React, {useContext} from 'react'
import { AccountContext } from '../context/AccountProvider'
import {Box,makeStyles,Typography} from '@material-ui/core'

const useStyles = makeStyles({
    profile:{
        display:'flex',
    },
    profile:{
        backgroundColor:'rgba(0,0,256,0.6)'
    },
    component:{
        paddingTop:'50px'
    },
    image:{
        width:'35%'
    }
})
const Profile = () => {
    const {account} = useContext(AccountContext);
    const classes = useStyles();
    console.log(account);
    return (
        <Box className ={classes.component}> 
            <Box className={classes.profile}>
                <Box className={classes.image}>
                    <img src={account.image} alt="profile-pic" style={{objectFit:'cover'}}/>
                </Box>
                <Box>
                    <Typography>First Name: {account.data.firstName}</Typography>
                    <Typography>Last Name : {account.data.lastName}</Typography>
                    <Typography>Email : {account.data.email}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Profile
