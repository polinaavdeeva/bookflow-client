import { Outlet } from 'react-router-dom'
import React from 'react'
import Menu from '../NavMenu/Menu'
import { Layout } from '@consta/uikit/Layout';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const MainLayout = () => {
  return (
    <Layout style={{display: 'flex', background: '#F7EFE5', height: '100vh'}}>
        <Menu/>  
        <Layout direction='column' style={{marginLeft: "15%", flexGrow: 1, display: "flex", flexDirection: "column"}}>
          <Header/>
          <div style={{marginTop: 60, height: "100%"}}>
            <Outlet/>
            <Footer/>
          </div>
        </Layout>   
 
    </Layout>
  )
}

export default MainLayout