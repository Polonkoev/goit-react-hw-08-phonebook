
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth_operations';

export const SignUp = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('')
  const dispatch = useDispatch();

// const userData = {
//     name,
//     email,
//     password
// }

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName((name = value));
        break;
      case 'email':
        setEmail((email = value));
        break;
      case 'password':
        setPassword((password = value));
        break;
      default:
    }
  };
  const handleSubmit = event =>{
    event.preventDefault()
    dispatch(signup({name, email, password}))
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={name} />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>
      <button>Save</button>
    </form>
  );
};
