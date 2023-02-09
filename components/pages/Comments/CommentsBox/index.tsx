import React from "react";
import { CommentProps } from "@/types/type";
import * as S from "../style";
const CommentsBox = ({ CommentList }: { CommentList: CommentProps }) => {
  return (
    <>
      <S.CommentWrap>
        <ul className="comment_wrap">
          <li>
            <span className="comment_title">{CommentList.body}</span>
            <span className="comment_id">{CommentList.userId}</span>
            <span className="comment_createdAt">{CommentList.createdAt}</span>
          </li>
        </ul>
      </S.CommentWrap>
    </>
  );
};

export default CommentsBox;
