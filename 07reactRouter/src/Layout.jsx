import React, { Component } from 'react'
import Footer from './Components/Header/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
export default class Layout extends Component {
  render() {
    return (
     <>
     <Header />
     <Outlet />
     <Footer />
     </>
    )
  }
}
