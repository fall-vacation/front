import styled from "styled-components";
import * as Palett from "@/constant/color";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 960px;
  background-color: #f3ae9f;
`;

export const Slogan = styled.div`
  padding-left: 50px;
  font-size: 96px;
  color: black;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .input-wrap {
    margin-right: 5px;
    padding-right: 20px;
    background-color: white;
    border-radius: 5px;
    overflow: hidden;
    input[type="text"] {
      width: 100%;
      height: 100%;
      padding: 5px;
    }
  }
`;
