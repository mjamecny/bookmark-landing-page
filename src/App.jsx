import styled from "styled-components"
import { useState } from "react"

import Cta from "./Cta"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import GlobalStyles from "./styles/GlobalStyles"
import Logo from "./ui/Logo"
import Faq from "./Faq"
import Download from "./Download"
import Features from "./Features"

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 2.4rem;
  padding-top: 4.8rem;
  background-color: rgba(37, 43, 70, 0.9);
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`

const NavItem = styled.li`
  padding-block: 2.4rem;
  border-top: 1px solid var(--color-grayish-blue);
  border-bottom: 1px solid var(--color-grayish-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavLink = styled.a`
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 2px;
`

const LogoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CloseBtn = styled.svg`
  cursor: pointer;
`

const Button = styled.button`
  text-transform: uppercase;
  color: #fff;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 4px;
  padding-block: 0.8rem;
  margin-top: 2.4rem;
  letter-spacing: 2px;
`

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  margin-top: auto;
`

const SocialLink = styled.a`
  cursor: pointer;
`

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <GlobalStyles />
      {isOpen && (
        <MobileNav>
          <LogoRow>
            <Logo mobile={true} />
            <CloseBtn
              onClick={() => setIsOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
            >
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
              />
            </CloseBtn>
          </LogoRow>
          <NavList>
            <NavItem>
              <NavLink href="#">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
          </NavList>
          <Button>Login</Button>
          <SocialContainer>
            <SocialLink href="#">
              <img src="icon-facebook.svg" alt="facebook icon" />
            </SocialLink>
            <SocialLink href="#">
              <img src="icon-twitter.svg" alt="twitter icon" />
            </SocialLink>
          </SocialContainer>
        </MobileNav>
      )}
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <Cta />
      <Footer />
    </>
  )
}
