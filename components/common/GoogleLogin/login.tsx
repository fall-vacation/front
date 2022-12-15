import { useGoogleLogin, GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import styled from "styled-components";

import person from "lib/person";
import { useUserStore } from "@/store/user";
import { Dispatch, SetStateAction } from "react";

export default function GoogleLoginButton({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
  const setIsLogin = useUserStore((p) => p.setIsLogin);

  const customLogin = useGoogleLogin({
    onSuccess: (res) => {
      person.login({ token: res.access_token });
      setIsLogin(true);
      setIsOpen(false);
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
