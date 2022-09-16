import React from "react";
import Nav from "../../../components/common/Nav";
import Image from "next/image";
import * as S from "./style";

const Introduce = () => {
  return (
    <S.IntroduceContainer>
      <S.Title>introduce company</S.Title>
      <S.Slogan>Sed ut perspiciatis</S.Slogan>
      <S.Content>
        <div className='image'>
          img
          <Image src={""} alt='introduce-image' />
        </div>
        <div className='text'>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
        </div>
      </S.Content>
    </S.IntroduceContainer>
  );
};

export default Introduce;
