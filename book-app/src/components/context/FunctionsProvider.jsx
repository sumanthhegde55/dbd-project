import React, { createContext, useContext, useState } from 'react'

export const FunctionsContext = new createContext(null);

const FunctionsProvider = ({children}) => {
    const [books,setBooks] = useState(true);
    return (
        <FunctionsContext.Provider value={{
            books,setBooks
        }}>
            {children}
        </FunctionsContext.Provider>
    )
}

export default FunctionsProvider
