import styled from "styled-components";
import * as Palett from "@/constant/color";
import MainVisualImg from "../../../public/images/bg_visual.jpg";
export const ContainerWrap = styled.div`
  position: relative;
  width: 100%;
  height: 96rem;
  background: url("../../../../images/bg_visual.jpg") no-repeat center top;
  background-size: contain;
  position: relative;
  @media screen and (max-width: 768px) {
    height: 100vh;
    background-size: cover;
    background-position: center bottom;
  }
`;
export const ContainerBox = styled.div`
  max-width: 1538px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const Slogan = styled.h2`
  padding-top: 250px;
  font-size: 8rem;
  color: black;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.25;
  font-family: "GmarketSans";
  font-weight: 500;
  span {
    font-size: 3.2rem;
    line-height: 1.5;
    font-weight: 300;
    display: block;
    color: #fff;
    margin-top: 3.2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 4rem;
    text-align: center;
    word-break: keep-all;
    padding-top: 0;
    span {
      font-size: 1.6rem;
      line-height: 1.5;
      font-weight: 300;
      display: block;
      color: #fff;
      margin-top: 1.6rem;
    }
  }
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 6rem;
  font-size: 0;
  .input-wrap {
    padding-right: 2rem;
    background-color: #fff;
    overflow: hidden;
    height: 8rem;
    padding: 0.5rem 0 0.5rem 2rem;
    width: 74.8rem;
    input[type="text"] {
      width: 100%;
      height: 100%;
      padding: 5px;
      font-size: 2.4rem;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 3rem;
    justify-content: center;
    .input-wrap {
      padding-right: 0;
      height: 4rem;
      padding: 0.5rem 0 0.5rem 2rem;
      width: 24rem;
      input[type="text"] {
        width: 100%;
        height: 100%;
        padding: 1.25rem;
        font-size: 1.2rem;
      }
    }
  }
`;
export const ZoomBox = styled.div`
  width: 9.2rem;
  height: 8rem;
  background: ${Palett.Color.colorPointer01};
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 4.6rem;
    height: 4rem;
  }
`;

export const FarmListWrap = styled.div`
  margin-bottom: 20rem;
  .title_box {
    position: relative;
    .icon {
      width: 2.2rem;
      height: 2.2rem;
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0.5rem;
      font-size: 0;
      box-sizing: border-box;
      span {
        width: 1rem;
        height: 1rem;
        font-size: 0;
        display: inline-flex;
        margin-bottom: 0.2rem;
        margin-right: 0.1rem;
        &:first-of-type {
          background: ${Palett.Color.colorPointer01};
        }
        &:nth-of-type(2) {
          background: #d9d9d9;
        }
        &:nth-of-type(3) {
          background: #a3b1b4;
        }
        &:last-of-type {
          background: ${Palett.Color.colorPointer02};
        }
      }
    }
  }
  .title {
    font-size: 2.8rem;
    line-height: 3.3rem;
    letter-spacing: -0.0015rem;
    padding-left: 3.5rem;
    margin-bottom: 3rem;
  }
  .list_box {
    border-top: 0.2rem solid ${Palett.Color.colorPointer02};
    padding-top: 8rem;
  }
`;

export const FarmListBox = styled.div`
  font-family: "S-CoreDream";
  display: flex;
  padding-left: 16rem;
  border-bottom: 0.1rem solid #dedede;
  padding-bottom: 6rem;
  margin-bottom: 6rem;
  justify-content: space-between;
  align-items: flex-start;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    border-bottom: none;
  }
  .farm_list {
    font-size: 2.8rem;
    line-height: 3.2rem;
    font-weight: 500;
    margin-bottom: 2.6rem;
  }
  .infomation {
    max-width: 55rem;
  }
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
  .img_box {
    margin-bottom: 4.8rem;
  }
  .adress_wrap {
    display: flex;
    flex-direction: column;
    dl {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      dt {
        font-size: 2rem;
        font-weight: 700;
        color: ${Palett.Color.colorPointer01};
        width: 15rem;
      }
      dd {
        width: calc(100% - 15rem);
        font-weight: 300;
      }
      dt,
      ul,
      li,
      dd {
        font-size: 1.6rem;
        line-height: 2.2rem;
        margin-bottom: 0.25rem;
        letter-spacing: -0.0015rem;
        word-break: keep-all;
      }
    }
  }
  .hashtag_wrap {
    margin-top: 4rem;
    ul {
      display: flex;
      font-size: 1.6rem;
      line-height: 2.2rem;
      font-weight: 300;
      color: #8f6561;
      li {
        margin-right: 1rem;
      }
    }
  }
`;
