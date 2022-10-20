import React, { useState, useRef } from "react";
import Wrap from "../Wrap";
import Hamburger from "@/components/ui/icon/hamburger";
import Modal from "../Modal";
import useOutsideClick from "hook/outSideClick";
import * as S from "./style";

const Nav = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useOutsideClick(modalRef, () => {
    setIsOpen(false);
  });
  return (
    <Wrap>
      <S.NavBar>
        <h1>
          <a href="/">Vacciones de otono</a>
          <button onClick={() => setIsOpen(true)}>
            모달 open (확인후삭제)
          </button>
        </h1>

        <Hamburger />

        {isOpen && (
          <Modal target={modalRef}>
            <div>ffqefqhjq</div>
          </Modal>
        )}
      </S.NavBar>
    </Wrap>
  );
};

export default Nav;
