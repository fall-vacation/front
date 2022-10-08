import { useState, useEffect } from "react";
import Zoom from "@/components/ui/icon/zoom";
import * as S from "./style";

const Title = () => {
  const [title, setTitle] = useState("Title");

  useEffect(() => {
    setTitle("Title");
  }, []);
  return (
    <S.Container>
      <S.Slogan>{title}</S.Slogan>
      <S.InputBox>
        <div className="input-wrap">
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <Zoom />
      </S.InputBox>
    </S.Container>
  );
};

export default Title;
