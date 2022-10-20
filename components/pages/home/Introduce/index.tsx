import React from "react";
import Nav from "@/components/common/Nav";
import Image from "next/image";
import * as S from "./style";

const Introduce = () => {
  return (
    <S.IntroduceContainer>
      <S.Title>
        가을방학은 삶의 바탕이 되는 자연과 환경을 소중하게 생각합니다
      </S.Title>
      <S.Slogan>Sed ut perspiciatis</S.Slogan>
      <S.Content>
        <div className="image">
          img
          <Image src={""} alt="introduce-image" />
        </div>
        <div className="text">
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
