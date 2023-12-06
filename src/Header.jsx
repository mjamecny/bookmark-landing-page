import styled from "styled-components"
import Logo from "./ui/Logo"

const StyledHeader = styled.section`
  padding-block: 4.8rem;
`

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding-inline: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Nav = styled.nav`
  display: none;

  @media (min-width: 48em) {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }
`

const NavList = styled.ul`
  display: flex;
  gap: 2.4rem;
`

const NavLink = styled.a`
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: var(--color-dark-blue);
  transition: color 0.3s;

  &:hover {
    color: var(--color-soft-red);
  }
`

const Button = styled.button`
  background-color: var(--color-soft-red);
  text-transform: uppercase;
  color: #fff;
  font-size: 1.4rem;
  letter-spacing: 1px;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 3.2rem;
  border: 2px solid transparent;
  transition: all 0.3s;

  &:hover {
    background-color: #fff;
    color: var(--color-soft-red);
    border: 2px solid var(--color-soft-red);
  }
`

const Hamburger = styled.svg`
  cursor: pointer;

  @media (min-width: 48em) {
    display: none;
  }
`

export default function Header({ isOpen, setIsOpen }) {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Nav>
          <NavList>
            <li>
              <NavLink href="#">Features</NavLink>
            </li>
            <li>
              <NavLink href="#">Pricing</NavLink>
            </li>
            <li>
              <NavLink href="#">Contact</NavLink>
            </li>
          </NavList>
          <Button>Login</Button>
        </Nav>

        <Hamburger
          onClick={() => setIsOpen(true)}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="15"
        >
          <path
            fill="#242A45"
            fill-rule="evenodd"
            d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
          />
        </Hamburger>
      </Container>
    </StyledHeader>
  )
}
