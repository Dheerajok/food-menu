import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingPaymentButton from './FloatingPaymentButton'


const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <FloatingPaymentButton />
        <Footer />
    
    </>
  )
}

export default Layout
