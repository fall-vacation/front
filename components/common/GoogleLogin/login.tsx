import { useGoogleLogin, GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import styled from "styled-components";

import person from "lib/person";

export default function GoogleLoginButton() {
  const customLogin = useGoogleLogin({
    onSuccess: (res) => {
      console.log("로그인 성공!", res);
      person.login({ token: res.access_token });
    },
  });

  return (
    <>
      <GoogleButton onClick={() => customLogin()}>구글 로그인</GoogleButton>
    </>
  );
}

const GoogleButton = styled.button`
  display: block;
  width: 100%;
  height: 6rem;
  background-color: #fff;
  border: 1px black solid;
  border-radius: 10px;
  outline: none;
  font-size: 2.5rem;
  text-align: center;
  cursor: pointer;
`;
