import React from "react";
import Wrap from "../Wrap";
import Hamburger from "@/components/ui/icon/hamburger";
import Modal from "../Modal";

import * as S from "./style";

const Nav = () => {
  const openModal = () => {};
  return (
    <Wrap>
      <S.NavBar>
        <h1>
          <a href="/">Vacciones de otono</a>
        </h1>

        <Hamburger />
        <Modal>
          <div>ffqefqhjq</div>
        </Modal>
      </S.NavBar>
    </Wrap>
  );
};

export default Nav;
