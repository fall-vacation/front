import { ReactNode, RefObject, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = ({
  children,
  target,
}: {
  children: ReactNode;
  target: RefObject<HTMLDivElement>;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <Dimed>
      <ModalWrap ref={target}>
        <>
          {mounted
            ? createPortal(children, document.querySelector("#modal-portal")!)
            : null}
        </>
      </ModalWrap>
    </Dimed>
  );
};

export const ModalWrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 80vw;
  height: 80vh;
  transform: translate(10vw, 10vh);
  background-color: white;
  border: 2px black solid;
  z-index: 999;
`;
const Dimed = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  content: "";
  z-index: -1;
`;

export default Modal;
