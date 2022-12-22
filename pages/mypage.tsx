import React, { useState, useRef, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MypageProfile from "@/components/pages/mypage/profile";
import { useUserStore } from "@/store/user";
import ProfileIcon from "@/components/ui/icon/profile";

export default function Mypage() {
  const router = useRouter();
  const { profileImg, name, introduce } = useUserStore();
  const FIXED_TABS = [
    { id: 0, title: "내 프로필", component: <MypageProfile /> },
    { id: 1, title: "관심사", component: <div>2</div> },
    { id: 2, title: "게시글", component: <div>3</div> },
  ];

  return (
    <>
      <div.wrap>
        <div.left>
          <div className="profile">{profileImg ? <Image src={profileImg} alt="thumb"></Image> : <ProfileIcon size={120} />}</div>
          <div className="id">{name}</div>
          <div className="introduce">{introduce}</div>

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

      border-radius: 50%;
      border: 1px solid #eee;
      margin-bottom: 2rem;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .id {
      font-size: 32px;
      font-weight: 500;
    }
    .introduce {
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
