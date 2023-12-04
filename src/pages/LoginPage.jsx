import { useContext, useState } from "react";
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005"

function LoginPage (props) {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const navigate = useNavigate()

    const {storeToken, authenticateUser} = useContext(AuthContext)

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleLoginSubmit = (e) => {
        e.preventDefault()

        const requestBody = {email, password}

        axios.post(`${API_URL}/auth/login`, requestBody)
        .then((res) => {
            console.log("JWT Token", res.data.authToken);
            storeToken(res.data.authToken)
            authenticateUser()
        })
        .catch((err) => {
            setErrorMessage(err.response.data.message)
        })
        .finally(() => {
            navigate("/")
        })
    }
    
    return (
        <div className="LoginPage">
      <h1>Login</h1>
 
      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
 
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />
 
        <button type="submit">Login</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }
 
      <p>Don't have an account yet?</p>
      <Link to={"/auth/signup"}> Sign Up</Link>
    </div>
    )
}

export default LoginPage