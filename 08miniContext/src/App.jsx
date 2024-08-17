
import Login from './Components/Login'
import Profile from './Components/Profile'
//import UserContext from './Context/UserContext'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {
 
  return (
   <UserContextProvider>
    <h1>   Visit to Aiman website </h1>
    <Login />
    <Profile />
   </UserContextProvider>
  )
}

export default App
