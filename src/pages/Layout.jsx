import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <>
    <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <ScrollRestoration></ScrollRestoration>
    </>
  )
}
