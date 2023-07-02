import React from 'react'
import MainHeader from './MainHeader'

const Layout = (props) => {
  return (
    <header>
      <MainHeader />
      <main>{props.children}</main>
    </header>
  )
}

export default Layout
