import { useState } from "react";
import styled from "styled-components";
import { useUserStore } from "@/store/user";

export default function MypageProfile() {
  const { name, introduce, setName, setIntroduce } = useUserStore();
  const [_name, _setName] = useState(name);
  const [_introduce, _setIntroduce] = useState(introduce);
  const [isModify, setIsModify] = useState(false);

  return (
    <div.wrap>
      <div.parent.wrap>
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <div.thumb size={80}></div.thumb>

          <div>
            <div className="name">{!isModify ? name : <input value={_name} onChange={(e) => _setName(e.target.value)} />}</div>
            <div className="introduce">{!isModify ? introduce : <input value={_introduce} onChange={(e) => _setIntroduce(e.target.value)} />}</div>
          </div>
        </div>
        <Button
          modify={isModify}
          onClick={() => {
            if (isModify) {
              setName(_name);
              setIntroduce(_introduce);
              setIsModify(!isModify);
            } else {
              setIsModify(!isModify);
            }
          }}
        >
          {!isModify ? "수정" : "적용"}
        </Button>
      </div.parent.wrap>

      <div.node.wrap>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div.thumb size={30}></div.thumb>
          <div>
            <div className="email">fqfeq</div>
          </div>
        </div>
        <Button>수정</Button>
      </div.node.wrap>

      <div.node.wrap>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div.thumb size={30}></div.thumb>
          <div>
            <div className="email">sonezvn@naver.com</div>
          </div>
        </div>
        <Button>수정</Button>
      </div.node.wrap>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 60rem;
    padding: 4rem;
    border: 1px solid #dedede;
  `,
  parent: {
    wrap: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding-bottom: 3rem;

      .name {
        font-weight: 400;
        font-size: 24px;
        line-height: 35px;
        margin-bottom: 0.5rem;
        input {
          width: 100%;
          background-color: #d9d9d9;
          font-size: inherit;
          color: #5e5e5e;
          padding: 3px 5px;
          border-radius: 4px;
        }
      }
      .introduce {
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        color: #999999;
        input {
          width: 100%;
          background-color: #d9d9d9;
          font-size: inherit;
          color: #5e5e5e;
          padding: 3px 5px;
          border-radius: 4px;
        }
      }
    `,
  },
  thumb: styled.div<{ size: number }>`
    width: ${(p) => p.size}px;
    height: ${(p) => p.size}px;
    background-color: #d9d9d9;
    border-radius: 50%;
  `,
  node: {
    wrap: styled.div`
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 1.5rem 0;
      border-top: 1px solid #dedede;

      .email {
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        color: #999999;
      }
    `,
  },
};

const Button = styled.button<{ modify?: boolean }>`
  width: 7rem;
  height: 3.2rem;
  background-color: ${(p) => (p.modify ? "#E9B665" : "#eaebeb")};
  color: ${(p) => (p.modify ? "white" : "#666666")};
  font-size: 1.8rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
