import styled from 'styled-components'

export const WrapContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`
// footer
export const FooterContainer = styled.footer`
  background-color: #bababa;
  color: black;
  text-align: center;
`

export const Contents = styled.div`
  max-width: 153.8rem;
  margin: 0 auto;
  padding-top: 20rem;
  height: 5rem;
  padding-bottom: 18rem;
  font-size: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`

export const FooterLogoWrap = styled.div`
  width: 27.6rem;
  font-size: 0;
  h1 {
    font-size: 10rem;
    font-weight: 300;
    line-height: 1;
    text-align: left;
  }
  ul {
    width: 23.2rem;
    display: flex;
    margin-top: 2.2rem;
    margin-left: 0.5rem;
    align-items: center;
    font-size: 0;
    justify-content: space-between;
    li {
      span {
        width: 5.4rem;
        height: 5.4rem;
        border-radius: 50%;
        background: #d9d9d9;
        display: block;
      }
    }
  }
`
export const FooterList = styled.ul`
  margin-right: 16rem;
`
export const FaqList = styled.li`
  a {
    display: block;
    font-size: 2.4rem;
    line-height: 1.5;
    letter-spacing: -0.15rem;
    text-align: left;
    font-weight: 300;
  }
`
