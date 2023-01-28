import { Link } from "react-router-dom"
export const AuthNav =()=>{
    return(
        <ul>
        <li>
          <Link to="signup">Register</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>
    )
}