import React, {useContext} from 'react'
import {AccountContext} from './context/AccountProvider';
import Login from './account/Login';
const Home = () => {
    const {account} = useContext(AccountContext);
    return (
        <div>
            {account ? <Home/> : <Login/>}
        </div>
    )
}

export default Home
