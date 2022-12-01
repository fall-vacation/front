import React from "react";
import Nav from "@/components/common/Nav";
import Image from "next/image";
import * as S from "./style";
// 이미지
import Pumpkin from "../../../../public/images/ic_ pumpkin.png";
const Introduce = () => {
  return (
    <S.IntroduceContainer>
      <S.Title>
        가을방학은
        <br />
        삶의 바탕이 되는 자연과 환경을
        <br />
        소중하게 생각합니다
      </S.Title>
      <S.Slogan>DECOUVRIR</S.Slogan>
      <S.Content>
        <div className="image">
          <S.CropsList>
            <li className="introduce-wrap">
              <Image
                src={Pumpkin}
                alt="introduce-image"
                className="introduce-image"
              />
              <span>딸기</span>
            </li>
            <li className="introduce-wrap">
              <Image
                src={Pumpkin}
                alt="introduce-image"
                className="introduce-image"
              />
              <span>딸기</span>
            </li>
            <li className="introduce-wrap">
              <Image
                src={Pumpkin}
                alt="introduce-image"
                className="introduce-image"
              />
              <span>딸기</span>
            </li>
            <li className="introduce-wrap">
              <Image
                src={Pumpkin}
                alt="introduce-image"
                className="introduce-image"
              />
              <span>딸기</span>
            </li>
          </S.CropsList>
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
