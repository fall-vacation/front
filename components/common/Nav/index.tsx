import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Wrap from "../Wrap";
import Hamburger from "@/components/ui/icon/hamburger";
import Modal from "../Modal";
import useOutsideClick from "hook/outSideClick";
import * as S from "./style";
import styled from "styled-components";
import GoogleLogin from "react-google-login";

const Nav = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useOutsideClick(modalRef, () => {
    setIsOpen(false);
  });

  const responseGoogle = (res: any) => {
    console.log(res);
  };

  return (
    <Wrap>
      <S.NavBar>
        <h1>
          <Link href="/">
            <a>Vacciones de otono</a>
          </Link>
        </h1>

        <div onClick={() => setIsOpen(!isOpen)}>
          <Hamburger />
        </div>

        {isOpen && (
          <Modal target={modalRef}>
            <S.ModalContents>
              <div className="login_bg">
                <h2 className="title">SNS Login</h2>
              </div>
              <ul>
                <li className="naver">네이버 로그인</li>
                <li className="kakao">카카오 로그인</li>
                <li className="facebook">페이스북 로그인</li>
                <GoogleLogin clientId="316528616128-l2tjfkmsjj3enepr1r5jaog8ab960oke.apps.googleusercontent.com" buttonText="구글로 계속하기" onSuccess={responseGoogle} onFailure={responseGoogle} />
              </ul>
            </S.ModalContents>
          </Modal>
        )}
      </S.NavBar>
    </Wrap>
  );
};

export default Nav;
