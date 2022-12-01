import React from "react";
import Nav from "@/components/common/Nav";
import Image from "next/image";
import Link from "next/link";
import * as S from "./style";
import { Color } from "@/constant/color";
import LinkArrow from "../../../../public/images/ic_linkArrow.svg";
const NavBtns = () => {
  return (
    <S.NavBtnContainer>
      <NavBtn
        color={Color.colorPointer03}
        title="체험하기"
        content="more"
        link="./weekend-farm"
      />
      <NavBtn
        color={Color.colorPointer01}
        title="직접하기"
        content="more"
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
          <div className="sub">Experience firsthand</div>
          <div className="title">{title}</div>
          <div className="content">
            <span>{content}</span>
            <div className="introduce-image">
              <Image
                src={LinkArrow}
                alt="introduce-image"
                className={"image"}
              />
            </div>
          </div>
        </a>
      </Link>
    </S.NavBtn>
  );
};

export default NavBtns;
