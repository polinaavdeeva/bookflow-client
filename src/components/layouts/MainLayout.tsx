import { Outlet } from 'react-router-dom'
import React from 'react'
import Menu from '../NavMenu/Menu'
import { Layout } from '@consta/uikit/Layout';
import Footer from '../Footer/Footer';

const MainLayout = () => {
  return (
    <Layout style={{display: 'flex', background: '#F7EFE5', height: '100%vh', width: '98.5vw', padding: 0}}>
      <Menu />
      <div>
        <Outlet />
        <Footer/>
      </div>
      
    </Layout>
  )
}

export default MainLayout