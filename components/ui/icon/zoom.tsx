import styled from "styled-components";

const Zoom = styled.svg``;

const Index = () => {
  const r = 10;
  const x = 11;
  const y = 11;
  const stroke = "#000";

  return (
    <Zoom width={25} height={25} viewBox="0 0 26 26">
      <circle r={r} cx={x} cy={y} stroke={stroke} fill="transparent"></circle>
      <path d="M25 25 L18 18" stroke={stroke}></path>
    </Zoom>
  );
};

export default Index;
