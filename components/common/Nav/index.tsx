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

const Nav = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [select, setSelect] = useState<boolean>(false);

  const [login, setLogin] = useState(false);

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

  useEffect(() => {
    setLogin(person.load() !== undefined);
  }, []);

  return (
    <Wrap>
      <S.NavBar>
        <h1>
          <Link href="/">
            <a>Vacciones de otono </a>
          </Link>
        </h1>
        {login ? (
          <ProfileWrap>
            <Profile click={() => setSelect(!select)} />
            {select && <ProfileSelect />}
          </ProfileWrap>
        ) : (
          <div onClick={() => setIsOpen(!isOpen)}>
            <Hamburger />
          </div>
        )}

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
                        person.logout();
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
const FIXED_PROFILE_SIZE = 30;

const Profile = ({ click }: { click: () => void }) => {
  return (
    <ProfileBtn size={FIXED_PROFILE_SIZE} onClick={click}>
      <svg width={FIXED_PROFILE_SIZE} height={FIXED_PROFILE_SIZE} viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="41.0459" cy="40.1875" r="40" fill="#4A4E5B" />
        <mask id="mask0_809_5975" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="81" height="80">
          <circle cx="40.9541" cy="40" r="39.5" fill="#4A4E5B" stroke="#666E78" />
        </mask>
        <g mask="url(#mask0_809_5975)">
          <path
            d="M40.9541 13.75C32.603 13.75 25.8331 20.4997 25.8331 28.826C25.8331 37.1522 32.603 43.9019 40.9541 43.9019C49.3052 43.9019 56.0751 37.1522 56.0751 28.826C56.0751 20.4997 49.3052 13.75 40.9541 13.75Z"
            fill="#686D7E"
          />
          <path
            d="M24.8251 51.9424C16.474 51.9424 9.7041 58.6922 9.7041 67.0184V71.7956C9.7041 74.8238 11.9052 77.4057 14.9028 77.8936C32.1561 80.7021 49.7521 80.7021 67.0054 77.8936C70.003 77.4057 72.2041 74.8238 72.2041 71.7956V67.0184C72.2041 58.6922 65.4342 51.9424 57.0831 51.9424H55.7087C54.9647 51.9424 54.2255 52.0597 53.5183 52.2899L50.0283 53.4261C44.132 55.3457 37.7762 55.3457 31.8799 53.4261L28.3899 52.2899C27.6827 52.0597 26.9435 51.9424 26.1995 51.9424H24.8251Z"
            fill="#686D7E"
          />
        </g>
      </svg>
    </ProfileBtn>
  );
};

const ProfileSelect = () => {
  return (
    <ProfileSelectWrap size={FIXED_PROFILE_SIZE}>
      <li onClick={() => {}}>마이페이지</li>
      <li onClick={() => person.logout()}>로그아웃</li>
    </ProfileSelectWrap>
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

const ProfileWrap = styled.div`
  position: relative;
`;

const ProfileBtn = styled.div<{ size: number }>`
  position: relative;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: 50%;
  border: 1px #eee solid;
  cursor: pointer;
`;

const ProfileSelectWrap = styled.ul<{ size: number }>`
  position: absolute;
  right: ${(p) => p.size * 0.4}px;
  top: ${(p) => p.size * 0.6}px;
  width: 200px;
  border: 1px black solid;
  border-radius: 12px;
  overflow: hidden;

  > li {
    padding: 10px 10px;
    background-color: white;
    border-bottom: 1px black solid;
    cursor: pointer;

    &:hover {
      background-color: #d62207;
      color: white;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

export default Nav;
