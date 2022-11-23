import styled from "styled-components";

export const IntroduceContainer = styled.div`
  width: 100%;
  padding: 14.1rem 0 0;
  background-color: white;
  text-align: center;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    padding-top: 5rem;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10rem;
  font-size: 6.4rem;
  line-height: 1.1;
  color: #5a9090;
  font-weight: 300;
  font-family: "GmarketSans";
  @media screen and (max-width: 768px) {
    margin-bottom: 4rem;
    font-size: 2.4rem;
    line-height: 1.5;
  }
`;

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
  @media screen and (max-width: 768px) {
    max-width: 13.5rem;
    padding: 1rem 0 1.2rem;
    font-size: 1.6rem;
    line-height: 1.8rem;
  }
`;

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
    font-family: "GmarketSans";
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 0 8rem;
    flex-direction: column;
    margin: 4rem auto 0;
    .image {
      width: 30rem;
      height: auto;
      border-top: 0.1rem solid #d9d9d9;
      border-bottom: 0.1rem solid #d9d9d9;
      padding: 2rem 0 1.6rem;
      box-sizing: border-box;
    }
    .text {
      margin-top: 6rem;
      text-align: center;
      font-size: 1.4rem;
      line-height: 2.8rem;
    }
  }
`;

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

  @media screen and (max-width: 768px) {
    .introduce-wrap {
      width: 3.5rem;
    }
    li {
      span {
        display: block;
        margin-top: 1.6rem;
        font-size: 1.6rem;
        line-height: 1.8rem;
        color: #000;
      }
    }
  }
`;
