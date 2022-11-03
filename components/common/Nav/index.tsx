import React, { useState, useRef } from "react";
import Link from "next/link";
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
            <ModalContents>
              <ul>
                <GoogleLogin clientId="316528616128-l2tjfkmsjj3enepr1r5jaog8ab960oke.apps.googleusercontent.com" buttonText="구글로 계속하기" onSuccess={responseGoogle} onFailure={responseGoogle} />
                <li className="naver">네이버 로그인</li>
                <li className="kakao">카카오 로그인</li>
                <li className="facebook">페이스북 로그인</li>
                <li className="google">구글 로그인</li>
              </ul>
            </ModalContents>
          </Modal>
        )}
      </S.NavBar>
    </Wrap>
  );
};

const ModalContents = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 480px;
  background-color: #fff;
  border: 1px black solid;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 114px 50px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      text-align: center;
      border-radius: 10px;
      font-weight: 200;
      font-size: 18px;
      line-height: 21px;
      color: White;
      & + li {
        margin-top: 10px;
      }
      &.naver {
        background-color: #2fb403;
      }
      &.kakao {
        background-color: #f9e007;
        color: black;
      }
      &.facebook {
        background-color: #45619d;
      }
      &.google {
        background-color: #d6492f;
      }
    }
  }
`;

export default Nav;
