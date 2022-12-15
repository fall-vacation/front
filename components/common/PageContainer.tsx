import styled from "styled-components";

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return <div.wrap>{children}</div.wrap>;
}

const div = {
  wrap: styled.div`
    padding-top: 14rem;
  `,
};
