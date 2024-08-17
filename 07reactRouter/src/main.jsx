import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Contact from './Contact/Contact.jsx'
import User from './User/User.jsx'
import GitHub, { githubInfo } from './Components/GitHub/GitHub.jsx'

//const router =createBrowserRouter([
 // {
   // path:'/',
    //element: <Layout />,
   // children:[
     // {
       // path:"",
        //element:<Home />
      //},
      //{
        //path:"about",
        //element:<About />
      //},
     // {
        //path:"contact",
        //element:<Contact />
     // }
    //]
  //}
//])
const router=createBrowserRouter(
  
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='home' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />} />
        <Route path='user/:userid' element={<User />} />
        <Route 
        loader={githubInfo}
        path='GitHub'
         element={<GitHub />} />
      
      </Route>
    )
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
