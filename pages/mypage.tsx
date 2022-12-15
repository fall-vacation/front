import React, { useState, useRef, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import useOutsideClick from "hook/outSideClick";
import styled from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";
import PageContainer from "@/components/common/PageContainer";

import MypageProfile from "@/components/pages/mypage/profile";

export default function Mypage() {
  const router = useRouter();
  const FIXED_TABS = [
    { id: 0, title: "내 프로필", component: <MypageProfile /> },
    { id: 1, title: "관심사", component: <div>2</div> },
    { id: 2, title: "게시글", component: <div>3</div> },
  ];

  return (
    <>
      <div.wrap>
        <div.left>
          <div className="profile">{/* <Image src="" /> */}</div>
          <div className="id">김태완</div>
          <div className="desc">ㄹ보라좁라ㅗㄹㅈ버ㅏㄹㅈ밥ㄹ좝ㅈ류</div>

          <ul className="tabs">
            {FIXED_TABS.map((tab, i) => (
              <li
                onClick={() =>
                  router.push({
                    pathname: router.pathname,
                    query: { ...router.query, id: tab.id },
                  })
                }
                key={i}
              >
                <div>{tab.title}</div>
              </li>
            ))}
          </ul>
        </div.left>
        <div.right>{router.query.id ? FIXED_TABS[router.query.id as any].component : FIXED_TABS[0].component}</div.right>
      </div.wrap>
    </>
  );
}

const div = {
  wrap: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5rem;
  `,
  left: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50rem;
    height: 100%;
    padding: 26rem 0;
    background-color: #eef0f2;
    .profile {
      width: 12rem;
      height: 12rem;
      background-color: #5a9090;
      border-radius: 50%;
      border: 1px solid #eee;
      margin-bottom: 2rem;
    }
    .id {
      font-size: 32px;
      font-weight: 500;
    }
    .desc {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      color: #999999;
      margin-bottom: 10rem;
    }
    .tabs {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      li {
        font-size: 2rem;
        font-weight: 400;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  `,
  right: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 26rem 0;
    width: calc(100% - 50rem);
    height: 100%;
    border: 1px red solid;
  `,
};
