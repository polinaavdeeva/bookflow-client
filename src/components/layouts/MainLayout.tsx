import { Outlet } from 'react-router-dom'
import React from 'react'
import Menu from '../NavMenu/Menu'
import { Layout } from '@consta/uikit/Layout';

const MainLayout = () => {
  return (
    <Layout style={{display: 'flex', background: '#F7EFE5', height: '100vh', width: '100%', padding: 0}}>
      <Menu />
      <Outlet />
    </Layout>
  )
}

export default MainLayout