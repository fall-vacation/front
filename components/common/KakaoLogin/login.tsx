import styled from "styled-components";
import { useRouter } from "next/router";

const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;

export default function KakaoLoginButton() {
  const router = useRouter();

  const handlerLogin = () => {
    router.push(KAKAO_URL, "/kakao");
  };

  return <KakaoButton onClick={() => handlerLogin()}>카카오로 시작하기</KakaoButton>;
}

const KakaoButton = styled.button`
  width: 100%;
  height: 6rem;
  background-color: #fee500;
  color: black;
  border: 1px black solid;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`;
