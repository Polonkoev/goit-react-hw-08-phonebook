import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "redux/auth/auth_operations"

export const LoginPage = ()=>{

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    const dispatch = useDispatch()


    const handleSubmit = event => {
        event.preventDefault()
        dispatch(login({email, password}))
    }
    
    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
          
          case 'email':
            setEmail((email = value));
            break;
          case 'password':
            setPassword((password = value));
            break;
          default:
        }
      };

    return(
        <form onSubmit={handleSubmit}>
            <label >Login:
                <input onChange={handleChange} type="email" name="email" value={email} placeholder='Input your email...'/>
            </label>
            <label >Password:
                <input onChange={handleChange} type="password" name="password" value={password}/>
            </label>
            <button>LogIn</button>
        </form>
    )
}