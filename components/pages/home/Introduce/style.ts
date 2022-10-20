import styled from 'styled-components'

export const IntroduceContainer = styled.div`
  width: 100%;
  padding: 14.1rem 0 0;
  background-color: white;
  text-align: center;
  box-sizing: border-box;
`

export const Title = styled.h2`
  margin-bottom: 10rem;
  font-size: 6.4rem;
  line-height: 1.1;
  color: #5a9090;
  font-weight: 300;
`

export const Slogan = styled.div`
  max-width: 27.8rem;
  margin: 0 auto;
  padding: 1.9rem 0 2.2rem;
  border-top: 0.1rem #000 solid;
  border-bottom: 0.1rem #000 solid;
  font-size: 2.4rem;
  line-height: 2.8rem;
  color: #000;
  font-weight: 300;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15.8rem;
  max-width: 1538px;
  box-sizing: border-box;
  margin: 17rem auto 0;
  padding-bottom: 24rem;
  .image {
    width: 59.5rem;
    height: 25.6rem;
    border-top: 0.1rem solid #d9d9d9;
    border-bottom: 0.1rem solid #d9d9d9;
    padding: 4.5rem 0 0;
    box-sizing: border-box;
  }
  .text {
    max-width: 55.4rem;
    font-size: 2.4rem;
    line-height: 4.4rem;
    text-align: left;
    font-weight: 300;
  }
`

export const CropsList = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    span {
      display: block;
      margin-top: 3.2rem;
      font-size: 2.4rem;
      line-height: 2.8rem;
      color: #000;
    }
  }
`
