import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Button } from "./button"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <Nav>
      {/* <NavLink to="/">NEW AGE PROJECTS</NavLink> */}
      <Bars />
      <StaticImage 
        src="../assets/images/Logotrans.png"
        width={300}
        alt="Logo"
        placeholder="dominantColor"
        quality="70"
      />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/contact">
          Schedule A Consultation
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 300px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc ((100vw - 1300px)/2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-declaration: none;
  padding: 0 1rem;
  height 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transfrom: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-top: -50px;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`