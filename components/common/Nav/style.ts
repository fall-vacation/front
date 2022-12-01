import styled from "styled-components";
import { Color } from "@/constant/color";
export const NavBar = styled.nav`
  display: flex;
  width: 100%;
  height: 14.4rem;
  box-sizing: border-box;
  position: relative;
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
    font-family: "Comfortaa";
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    height: 5rem;
    padding: 0 2rem;
    h1 {
      font-size: 2rem;
    }
  }
`;

export const HamburgerWrap = styled.div`
  z-index: 999;
`;
export const ModalContents = styled.div`

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 52rem;
  height: 40rem;
  background-color: #fff;

  > * {
    box-sizing: border-box;
  }

  .login_bg {
    background: #52a2ec;
    height: 12rem;
    position: relative;
    &::after{
      content: '';
      position: absolute;
      display: block;
      width: 17.8rem;
      height: 18.4rem;
    }
  }
  .title {
    font-size: 3.6rem
    line-height: 4.2rem;
    color: #fff;
    font-weight: 700;
    font-family: 'GmarketSans';
    position: absolute;
    bottom: 4rem;
    left: 4rem;
    padding-left: 2rem;
    &::before{
      content: '';
      width: 0.4rem;
      height: 4rem;
      background: #98E2E7;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
    li {
      width: 100%;
      height: 6rem;
      border-radius: 1rem;
      font-weight: 200;
      font-size: 18px;
      max-width: 34rem;
      line-height: 21px;
      color: White;
      margin-bottom: 2rem;
      font-family: "S-CoreDream";
      font-weight: 200;
      font-size: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .icon_box{
          width: 7rem;
          height: 6rem;
          display: inline-flex;
          margin-right: 2rem;
          border-right: 1px dotted #ececec;
          font-size: 0;
          align-items: center;
          justify-content: center;
        }
        img{
          max-width: 5.2rem;
          font-size: 0;
        }
      &.naver {
        background-color: #03C75A;
      }
      &.kakao {
        background-color: #FEE500;
        color: black;
      }

      &.google {
        background-color: #FFFFFF;
        border: 0.1rem solid #DEDEDE;
        color: #000;
      }
    }
  }
`;
