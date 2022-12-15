import React, { useState, useRef, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import useOutsideClick from "hook/outSideClick";
import styled from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";
import PageContainer from "@/components/common/PageContainer";

export default function Mypage() {
  const router = useRouter();
  const FIXED_TABS = [
    { title: "내 프로필", component: <div>1</div> },
    { title: "관심사", component: <div>2</div> },
    { title: "게시글", component: <div>3</div> },
  ];

  return (
    <PageContainer>
      <div.wrap>
        <div.left>
          <div>profile</div>
          <div>김태완</div>
          <div>ㄹ보라좁라ㅗㄹㅈ버ㅏㄹㅈ밥ㄹ좝ㅈ류</div>

          <ul>
            {FIXED_TABS.map((tab, i) => (
              <li
                onClick={() =>
                  router.push({
                    pathname: router.pathname,
                    query: { ...router.query, tab: tab.title },
                  })
                }
                key={i}
              >
                <div>{tab.title}</div>
              </li>
            ))}
          </ul>
        </div.left>
        {/* <div.right>{FIXED_TABS.filter((el) => el.title === (router.query.tab as string))[0].component}</div.right> */}
      </div.wrap>
    </PageContainer>
  );
}

const div = {
  wrap: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  left: styled.div`
    height: 100%;
    background-color: #eef0f2;
  `,
  right: styled.div``,
};
