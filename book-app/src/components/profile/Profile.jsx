import React, {useContext} from 'react'
import { AccountContext } from '../context/AccountProvider'
import {Dialog} from '@material-ui/core'
import ProfileBox from './ProfileBox';
const Profile = () => {
    const {account,profile,setProfile} = useContext(AccountContext);
    return (
        <Dialog
        open={profile}
        onClose={() =>{setProfile(false)}}
      >
      <img src = {account.image} alt="profile" style={{width:'350px',cursor:'pointer',height:'355px'}}/>  
      <ProfileBox/>
      </Dialog>
    )
}

export default Profile
