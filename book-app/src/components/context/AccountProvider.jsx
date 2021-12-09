import {createContext,useState} from 'react'

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {
    const [account,setAccount] = useState(null);
    const [openSignup,setOpenSignup] = useState(false);
    const [openLogin,setOpenLogin] = useState(false);
    // console.log(account);
    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            openLogin,
            setOpenLogin,
            setOpenSignup,
            openSignup
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider
