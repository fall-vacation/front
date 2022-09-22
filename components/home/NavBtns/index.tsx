import React from "react";
import Nav from "../../common/Nav";
import Image from "next/image";
import * as S from "./style";

const NavBtns = () => {
  return (
    <S.NavBtnContainer>
      <NavBtn
        color='#5A9090'
        title='grow[raise] crops'
        content='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.'
      />
      <NavBtn
        color='#E9B665'
        title='G마켓'
        content='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.'
      />
    </S.NavBtnContainer>
  );
};

type Props = {
  color: string;
  title: string;
  content: string;
};

const NavBtn = ({ color, title, content }: Props) => {
  return (
    <S.NavBtn color={color}>
      <div className='title'>{title}</div>
      <div className='content'>{content}</div>
    </S.NavBtn>
  );
};

export default NavBtns;
