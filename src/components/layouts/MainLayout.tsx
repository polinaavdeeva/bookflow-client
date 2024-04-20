import { Outlet } from 'react-router-dom'
import React from 'react'
import Menu from '../NavMenu/Menu'
import { Layout } from '@consta/uikit/Layout';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const MainLayout = () => {
  return (
    <Layout style={{display: 'flex', background: '#F7EFE5', height: '100%'}}>
        <Menu/>  
        <Layout direction='column' style={{marginLeft: "15%", flexGrow: 1, display: "flex", flexDirection: "column", height: '200%'}}>
          <Header/>
          <div style={{marginTop: 60}}>
            <Outlet/>
            <Footer/>
          </div>
        </Layout>   
 
    </Layout>
  )
}

export default MainLayout