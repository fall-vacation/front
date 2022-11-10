import { useGoogleLogin, GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import styled from "styled-components";
import { useUserStore } from "@/store/index";

export default function GoogleLoginButton() {
  const customLogin = useGoogleLogin({
    onSuccess: (res) => {
      console.log("로그인 성공!", res);
      sessionStorage.setItem("fall-vacation-access_token", res.access_token);
    },
  });

  return <GoogleButton onClick={() => customLogin()}>구글 로그인</GoogleButton>;
}

const GoogleButton = styled.button`
  width: 100%;
  height: 6rem;
  background-color: #fff;
  border: 1px black solid;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`;
