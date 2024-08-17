import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'
export default function Login() {
    const [username,setUsername]=useState('')
    const [password,setPasword]=useState('')
    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>
        {
            e.preventDefault()
            setUser({username,password})
        }
  return (
    <>
          <h2>Login</h2>
      <input type='text'
      value={username} 
      onChange={(e)=>setUsername(e.target.value)}
      placeholder='username'/>
        { "  "}
        <input type='text'
        value={password}
        onChange={(e)=>setPasword(e.target.value)}
        placeholder='password'
        />
        { "   "}
       
      <button onClick={handleSubmit} >Submit</button>
    </>
  )
}
