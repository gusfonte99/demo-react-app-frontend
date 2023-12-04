import React, {useState, useEffect} from "react"
import axios from "axios"

const API_URL = "http://localhost:5005/"

const AuthContext = React.createContext()

function AuthProviderWrapper (props) {

    const [loggedIn, setLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)

    const storeToken = (token) => {
        localStorage.setItem("authToken", token)
    }

    const authenticateUser = (token) => {
        const storedToken = localStorage.setItem("authToken", token)

        if(storedToken) {
            axios.get(`${API_URL}/auth/verify`, {headers: {Authorization: `Bearer ${storedToken}`}})
            .then((res) => {
                console.log(res.data);
                const user = res.data

                setLoggedIn(true)
                setIsLoading(false)
                setUser(user)
            })
            .catch((err) => {
                setLoggedIn(false)
                setIsLoading(false)
                setUser(null)
            })
        } else {
            setLoggedIn(false)
            setIsLoading(false)
            setUser(null)
        }
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <AuthContext.Provider value={{loggedIn, isLoading, user, storeToken, authenticateUser}}>
            {props.children}
        </AuthContext.Provider>
    )

}

export {AuthContext, AuthProviderWrapper}