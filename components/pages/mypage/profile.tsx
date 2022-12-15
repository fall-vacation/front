import styled from "styled-components";

export default function MypageProfile() {
  return (
    <div.wrap>
      <div>
        <div>프로필 디자이너</div>
        <div>1</div>
        <div>2</div>
      </div>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 60rem;
    padding: 4rem;

    border: 1px solid #dedede;
  `,
};
