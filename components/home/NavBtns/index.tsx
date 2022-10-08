import React from "react";
import Nav from "@/components/common/Nav";
import Image from "next/image";
import Link from "next/link";
import * as S from "./style";
import { Color } from "@/constant/color";

const NavBtns = () => {
  return (
    <S.NavBtnContainer>
      <NavBtn
        color={Color.emerald}
        title="체험하기"
        content="grow[raise] crops"
        link="./weekend-farm"
      />
      <NavBtn
        color={Color.butter}
        title="직접하기"
        content="grow[raise] crops"
        link="./taewans-farm"
      />
    </S.NavBtnContainer>
  );
};

type Props = {
  color: string;
  title: string;
  content: string;
  link: string;
};

const NavBtn = ({ color, title, content, link }: Props) => {
  return (
    <S.NavBtn color={color}>
      <Link href={link}>
        <a>
          <div className="title">{title}</div>
          <div className="content">{content}</div>
        </a>
      </Link>
    </S.NavBtn>
  );
};

export default NavBtns;
