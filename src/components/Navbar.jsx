import { Link } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../context/auth.context"

function Navbar() {

  const {loggedIn, user} = useContext(AuthContext)

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      {loggedIn 
      ? 
        <>
      <Link to="/projects">
        <button>Projects</button>
      </Link>

      <button>Logout</button>
        </>
      
      : 
      <>
      <Link to="/auth/signup"> <button>Sign up</button> </Link>
      <Link to="/auth/login"> <button>Log in</button> </Link>
      </>
      }
    </nav>
  );
}

export default Navbar;
