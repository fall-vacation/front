import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Wrap from "../Wrap";
import Hamburger from "@/components/ui/icon/hamburger";
import Modal from "../Modal";
import useOutsideClick from "hook/outSideClick";
import * as S from "./style";
import styled from "styled-components";
import GoogleLoginButton from "../GoogleLogin/login";
import GoogleLogoutButton from "../GoogleLogin/logout";

const Nav = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useOutsideClick(modalRef, () => {
    setIsOpen(false);
  });

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
            <Dim>
              <S.ModalContents>
                <div className="login_bg">
                  <h2 className="title">SNS Login</h2>
                </div>
                <ul>
                  <li className="naver">네이버 로그인</li>
                  <li className="kakao">카카오 로그인</li>
                  <li className="facebook">페이스북 로그인</li>
                  <GoogleLoginButton />
                  <GoogleLogoutButton />
                </ul>
              </S.ModalContents>
            </Dim>
          </Modal>
        )}
      </S.NavBar>
    </Wrap>
  );
};

const Dim = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999999;
  overflow: hidden;
`;

export default Nav;
