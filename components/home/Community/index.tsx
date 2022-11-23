import React from "react";
import Nav from "@/components/common/Nav";
import Image from "next/image";
import Link from "next/link";
import * as S from "./style";
import { Color } from "@/constant/color";
import LinkArrow from "../../../public/images/ic_linkArrow.svg";
type Props = {
  color: string;
  content: string;
  link: string;
};
const NavBtn = ({ color, content, link }: Props) => {
  return (
    <S.NavBtn color={color}>
      <Link href={link}>
        <a>
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

const Community = () => {
  return (
    <>
      <S.CommunityContainer>
        <S.TopContent>
          <S.ContentTitle>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </S.ContentTitle>
        </S.TopContent>
        <S.BottomContent>
          <NavBtn
            color={Color.colorPointer02}
            content="more"
            link="./taewans-farm"
          />
          <S.CommunityText>COMMUNITY</S.CommunityText>
        </S.BottomContent>
      </S.CommunityContainer>
    </>
  );
};

export default Community;
