import { ReactNode, RefObject, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

type ModalProps = {
  children: ReactNode;
  target: RefObject<HTMLDivElement>;
  width?: number;
  height?: number;
};

const Modal = ({ children, target, width, height }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.querySelector("#x-portal")!) : null;
};

export default Modal;
