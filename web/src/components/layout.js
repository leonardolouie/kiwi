import React from 'react'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
const Layout = ({children}) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
