import styled from 'styled-components'
import * as Palett from '@/constant/color'
import MainVisualImg from '../../../public/images/bg_visual.jpg'
export const ContainerWrap = styled.div`
  position: relative;
  width: 100%;
  height: 96rem;
  background: url('../../../../images/bg_visual.jpg') no-repeat center top;
  background-size: contain;
`
export const ContainerBox = styled.div`
  max-width: 1538px;
  margin: 0 auto;
`
export const Slogan = styled.h2`
  padding-top: 250px;
  font-size: 8rem;
  color: black;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.25;
  font-family: 'GmarketSans';
  font-weight: 500;
  span {
    font-size: 3.2rem;
    line-height: 1.5;
    font-weight: 300;
    display: block;
    color: #fff;
    margin-top: 3rem;
  }
`

export const InputBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 60px;
  font-size: 0;
  .input-wrap {
    padding-right: 2rem;
    background-color: #fff;
    overflow: hidden;
    height: 8rem;
    padding: 0.5rem 0 0.5rem 2rem;
    width: 74.8rem;
    input[type='text'] {
      width: 100%;
      height: 100%;
      padding: 5px;
      font-size: 2.4rem;
    }
  }
`
export const ZoomBox = styled.div`
  width: 9.2rem;
  height: 8rem;
  background: ${Palett.Color.colorPointer01};
  display: flex;
  align-items: center;
  justify-content: center;
`
