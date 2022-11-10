import { useRef } from "react";
import styled from "styled-components";

export default function Test() {
  const ref01 = useRef<boolean>(false);
  const spanRef = useRef(null);

  const onClickHandler = () => {
    ref01.current = !ref01.current;
  };

  return (
    <div style={{ marginTop: 500 }}>
      <div onClick={onClickHandler}>
        <span ref={spanRef}></span> 모두동의
      </div>
    </div>
  );
}

const div = {
  wrap: styled.div<{ checked: boolean }>``,
};
