import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router'

export default function ScreenWithNavbar() {
  return (
    <>
    <Navbar/>
    <Outlet/>
      
    </>
  )
}
