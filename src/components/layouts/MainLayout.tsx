import { Outlet } from 'react-router-dom'
import React from 'react'
import Menu from '../NavMenu/Menu'

const MainLayout = () => {
  return (
    <div style={{display: 'flex', background: '#F7EFE5', height: '100vh'}}>
      <Menu />
      <Outlet />
    </div>
  )
}

export default MainLayout