import React from "react";
import Wrap from "../Wrap";
import Hamburger from "@/components/ui/icon/hamburger";

import * as S from "./style";

const Nav = () => {
  return (
    <Wrap>
      <S.NavBar>
        <h1>
          <a href="">Logo</a>
        </h1>

        <div>
          <Hamburger />
        </div>
      </S.NavBar>
    </Wrap>
  );
};

export default Nav;
