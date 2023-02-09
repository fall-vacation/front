import { useEffect, useState } from "react";
import { getComments as getCommentsApi } from "api/comments";
import { CommentProps } from "@/types/type";
import CommentsBox from "./CommentsBox";
import * as S from "./style";
type CommentsWrap = {
  currentUserId: string;
};
const Comments = ({ currentUserId }: CommentsWrap) => {
  const [comment, setComment] = useState<CommentProps[]>([]);
  useEffect(() => {
    getCommentsApi().then((data: any) => {
      return setComment(data);
    });
  }, []);
  console.log(comment);
  return (
    <S.CommentsFormWrap>
      <div className="reviewer">
        <h2 className="reviewer_title">REVIEW</h2>
        <div className="form_box">
          <form action="">
            <label htmlFor="story">리뷰를 작성해주세요.</label>
            <textarea
              id="story"
              name="story"
              placeholder="리뷰를 작성해주세요."
            ></textarea>
            <div className="reviewer_submit-wrap">
              <select name="" id="" className="score_star">
                <option>⭐️⭐️⭐️⭐️⭐️</option>
                <option>⭐️⭐️⭐️⭐️</option>
                <option>⭐️⭐️⭐️</option>
                <option>⭐️⭐️</option>
                <option>⭐️</option>
              </select>
              <button type="submit" className="submit_btn">
                리뷰 등록
              </button>
            </div>
          </form>
        </div>
        {comment.map((el) => {
          return (
            <>
              <CommentsBox CommentList={el} key={el.id} />
            </>
          );
        })}
      </div>
    </S.CommentsFormWrap>
  );
};

export default Comments;
