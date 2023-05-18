import { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext()

const AuthProviderData = ({children}) => {
    const [toys, setToys] = useState([])
    // const getChefs = async () => {
    //     const res = await fetch()
    //     const data = await res.json()
    //     setChefs(data)
    // }
    useEffect(() => {
        setToys()
    },[])

    const apiDatas = {
        toys,

    }
    return (
        <ApiContext.Provider value={apiDatas}>
            {children}
        </ApiContext.Provider>
    )
}

const useApiData = () => {
    return useContext(ApiContext)
}

export {
    AuthProviderData,
    useApiData
}