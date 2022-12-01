import styled from "styled-components";
import { Color } from "@/constant/color";

export const NavBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 50%;
  height: 60rem;
  text-align: center;
  background-color: ${Color.colorPointer03};
  box-sizing: border-box;
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
  a {
    display: block;
  }
  & + & {
    background-color: ${Color.colorPointer01};
    .title {
      color: ${Color.colorPointer03};
    }
  }
  .sub {
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 3.6rem;
    letter-spacing: -0.15rem;
    margin-bottom: 1.9rem;
    font-weight: "Amalfi Coast Regular";
  }
  .title {
    margin-bottom: 3.8rem;
    font-family: "GmarketSans";
    font-size: 2.4rem;
    font-weight: 700;
    font-size: 8.4rem;
    letter-spacing: -0.15rem;
    line-height: 1.2;
    color: ${Color.colorPointer01};
  }
  .content {
    font-size: 2rem;
    line-height: 2.3rem;
    font-weight: 500;
    letter-spacing: -0.05rem;
    display: inline-flex;
    align-items: center;
    color: #fff;
    font-family: "GmarketSans";
    span {
      margin-right: 2rem;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 28rem;
    .title {
      font-size: 4.2rem;
      margin-bottom: 1.6rem;
    }
    .sub {
      margin-bottom: 1rem;
    }
    .content {
      line-height: 0;
    }
    .introduce-image {
      width: 4rem;
    }
  }
`;
