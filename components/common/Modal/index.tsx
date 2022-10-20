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
    <ModalWrap ref={target}>
      {mounted
        ? createPortal(children, document.querySelector("#modal-portal")!)
        : null}
    </ModalWrap>
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
  border: 3px black solid;
  z-index: 999;
`;

export default Modal;
