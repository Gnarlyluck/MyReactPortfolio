import React from "react"
import Nav from "../components/Nav"
import styles from '../scss/mains.scss'

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Nav></Nav> */}
      <main>{children}</main>
    </div>
  )
}
export default Layout