import styled from "styled-components";

export const NavBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 50%;
  height: 60rem;
  text-align: center;
  background-color: ${(props) => props.color};
  .title {
    margin-bottom: 5rem;
    font-family: "GmarketSans";
    font-size: 2.4rem;
    font-weight: 500;
    color: "white";
  }
  .content {
  }
`;
