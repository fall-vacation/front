import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  width: 100%;
  height: 14.4rem;
  box-sizing: border-box;
  position: absolute;
  padding: 0 4.5rem;
  background: transparent;
  top: 0;
  right: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  z-index: 100;
  h1 {
    font-size: 4.8rem;
    line-height: 1;
    font-family: 'Comfortaa';
    font-weight: 500;
  }
`

export const HamburgerWrap = styled.div`
  z-index: 999;
`
