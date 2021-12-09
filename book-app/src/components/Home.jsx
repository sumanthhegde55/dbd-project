import React, {useContext} from 'react'
import { FunctionsContext } from './context/FunctionsProvider';
import NavBar from './NavBar';
import Books from './books/Books';
import Profile from './profile/Profile';
import { AccountContext } from './context/AccountProvider';
const Home = () => {
    const {books} = useContext(FunctionsContext);
    const {account} = useContext(AccountContext);
    return (
        <>
            <NavBar/>
            {account ? books ? <Books/> : <Profile/> : null}
        </>
    )
}

export default Home
