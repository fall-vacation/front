import styled from "styled-components";
import { Color } from "@/constant/color";

export const CommentsFormWrap = styled.div`
  .reviewer {
    margin-right: 4rem;
    min-width: 64rem;
    &_title {
      font-size: 2.2rem;
      font-weight: 200;
      line-height: 2.8rem;
      margin-bottom: 3rem;
    }
    .form_box {
      border-top: 0.1rem solid #dedede;
      padding-top: 3rem;
      padding-bottom: 3rem;
      border-bottom: 0.1rem solid #dedede;
      position: relative;
      label {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px, 1px, 1px, 1px);
      }
      form {
        display: block;
      }
      textarea {
        resize: none;
        width: 100%;
        padding: 2rem;
        box-sizing: border-box;
        display: block;
        height: 12rem;
        font-size: 1.6rem;
        line-height: 2.2rem;
        border: 1px solid #dedede;
      }
      .submit_btn {
        font-size: 1.6rem;
        line-height: 1;
        padding: 1.6rem 3.3rem 1.3rem;
        color: #fff;
        background: #e9b665;
        box-sizing: border-box;
        border: none;
        cursor: pointer;
        height: 5rem;
      }
      .reviewer_submit-wrap {
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: right;
        .submit_btn {
          margin-left: 1.5rem;
        }
        .score_star {
          width: 18rem;
          box-sizing: border-box;
          padding: 1.5rem 1.3rem;
          height: 5rem;
          option {
          }
        }
      }
    }
  }
`;

export const CommentWrap = styled.div`
  margin-top: 2rem;
  .comment_ {
    &wrap {
      li {
        display: flex;
        align-items: center;
      }
    }
    &title {
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 2rem;
      width: 32rem;
      text-overflow: ellipsis;
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
    }
    &id {
      font-weight: 300;
      font-size: 16px;
      line-height: 2rem;
    }
    &createdAt {
      font-weight: 300;
      font-size: 16px;
      line-height: 2rem;
    }
  }
`;
