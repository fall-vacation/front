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
import KakaoLoginButton from "../KakaoLogin/login";
import { useEffect } from "react";
import person from "lib/person";
import useUserStore from "@/store/user";

const Nav = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const clickEvt = (e: any) => {
      if (contentRef.current && !contentRef.current?.contains(e.target)) {
        console.log("hi");
      }
    };

    contentRef.current?.addEventListener("click", clickEvt);

    return () => {
      contentRef.current?.removeEventListener("click", clickEvt);
    };
  }, [contentRef]);

  return (
    <Wrap>
      <S.NavBar>
        <h1>
          <Link href="/">
            <a>Vacciones de otono </a>
          </Link>
        </h1>

        <div onClick={() => setIsOpen(!isOpen)}>
          <Hamburger />
        </div>

        {isOpen && (
          <Modal target={modalRef}>
            <Dim>
              <S.ModalContents ref={contentRef}>
                <div className="login_bg">
                  <Close>
                    <svg width={25} height={25} viewBox="0 0 25 25" onClick={() => setIsOpen(!isOpen)}>
                      <path d="M0 0 L25 25 M25 0 L 0 25 Z" stroke="black"></path>
                    </svg>
                  </Close>
                  <h2 className="title">SNS Login{String(person.isLogin)}</h2>
                </div>
                <ul>
                  {/* <li className="naver">네이버 로그인</li> */}
                  <li>
                    <GoogleLoginButton />
                  </li>
                  <li>
                    <KakaoLoginButton />
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        person.logout;
                      }}
                    >
                      로그아웃
                    </button>
                  </li>
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

const Close = styled.div`
  padding: 10px;
  text-align: right;
  > svg {
    cursor: pointer;
  }
`;

export default Nav;
