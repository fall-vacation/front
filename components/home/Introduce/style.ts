import styled from "styled-components";

export const IntroduceContainer = styled.div`
  width: 100%;
  height: 948px;
  padding: 141px 0;
  background-color: white;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 87px;
  font-size: 48px;
  color: #5a9090;
`;

export const Slogan = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 44px 0;
  border-top: 1px #cecccc solid;
  border-bottom: 1px #cecccc solid;
  font-size: 24px;
  color: #f4afa0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px;
  margin-top: 159px;
  .image {
    width: 468px;
    height: 184px;
    background-color: #e5e5e5;
  }
  .text {
    max-width: 700px;
    font-size: 18px;
    font-weight: normal;
    text-align: left;
  }
`;
