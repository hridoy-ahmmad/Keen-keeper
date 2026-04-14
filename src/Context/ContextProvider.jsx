"use client"
import React, { Children, createContext, useState } from 'react';

export const friendContext = createContext()
const ContextProvider = ({ children }) => {
    const [friendData, setFriendData] = useState([])


    const handle =({data, type})=>{

    }
console.log(friendData);

    const data = {
        friendData,
        setFriendData
    }

    return <friendContext.Provider value={data}>
        {children}
    </friendContext.Provider>

};

export default ContextProvider;