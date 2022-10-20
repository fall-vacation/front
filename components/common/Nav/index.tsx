import React, { useState, useRef } from "react";
import Link from "next/link";
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
          <Link href="/">
            <a>Vacciones de otono</a>
          </Link>
        </h1>

        <div onClick={() => setIsOpen(!isOpen)}>
          <Hamburger />
        </div>

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
