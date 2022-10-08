import styled from "styled-components";

const Hamburger = styled.svg`
  cursor: pointer;
  path {
    transition: all 0.5s ease;
    stroke: #000;
  }

  &:hover {
    path {
      stroke: #d4d4d4;
    }
    path:nth-child(1) {
      transform: translate(20%, 0%) rotate(45deg);
    }
    path:nth-child(2) {
      transform: translateX(100%);
      opacity: 0;
    }
    path:nth-child(3) {
      transform: translate(-40%, 20%) rotate(-45deg);
    }
  }
`;

const Index = () => {
  return (
    <>
      <Hamburger width={25} height={25}>
        <path d="M25 1 L0 1" viewBox="0 0 20 20" strokeWidth="2"></path>

        <path d="M25 11 L0 11" viewBox="0 0 20 20" strokeWidth="2"></path>

        <path d="M25 20 L0 20" viewBox="0 0 20 20" strokeWidth="2"></path>
      </Hamburger>
    </>
  );
};

export default Index;
