import React from "react"
import styled from "styled-components"
import Header from "components/Header"
import Footer from "components/Footer"
import Scroll from "components/Scroll"

interface props {
  children: React.ReactNode | React.ReactNode[]
}

const Layout: React.FC<props> = ({ children }) => {
  return (
    <Scroll>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Scroll>
  )
}

export default Layout

const Main = styled.main``
