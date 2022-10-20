import styled from 'styled-components'
import { FontColor, Color } from '@/constant/color'
export const CommunityContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 16rem;
`
export const TopContent = styled.div`
  max-width: 153.8rem;
  margin: 0 auto;
  padding-top: 20rem;
  padding-bottom: 18rem;
  font-size: 0;
`
export const BottomContent = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  font-size: 0;
  justify-content: space-between;
`
export const NavBtn = styled.div`
  background-color: ${Color.colorPointer02};
  width: 148rem;
  a {
    display: inline-flex;
    height: 20rem;
    width: 148rem;
    align-items: center;
    justify-content: right;
    padding-right: 5rem;
    @keyframes box-ani {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(15px);
      }
    }
    &:hover {
      .content {
        animation: box-ani 0.5s linear forwards;
      }
    }
    .content {
      font-size: 2rem;
      line-height: 2.3rem;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      color: #fff;
      span {
        margin-right: 0.5rem;
      }
    }
  }
`
export const CommunityText = styled.div`
  font-size: 18rem;
  line-height: 3.6rem;
  color: #f5f5f5;
  letter-spacing: -0.15rem;
  font-family: 'GmarketSans';
  text-align: right;
  font-weight: 700;
  margin-top: 4.5rem;
  position: relative;
  z-index: -1;
`

export const ContentTitle = styled.h2`
  font-size: 6.4rem;
  max-width: 84rem;
  line-height: 1.1;
  color: {
    ${FontColor.fontIndigo}
  }
  font-weight: 300;
`

export const NavBtnContainer = styled.div``
