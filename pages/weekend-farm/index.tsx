import SouthKorea from "@/components/pages/weekend-farm/south-korea";
import { Farm } from "../../types/type";
import styled from "styled-components";
import * as S from "../../components/pages/home/Title/style";

type Props = {
  farmList: Farm[];
};

const locations = ["도봉구", "노원구", "강북구", "성북구", "중랑구", "동대문구"];

const Index = ({ farmList }: Props) => {
  // const { farmList } = useFarms();

  return (
    <S.ContainerBox>
      <h2>위켄드팜</h2>

      <FilterWrap>
        <SouthKorea width={800} />

        <div>
          <Locations>
            {locations.map((location, i) => (
              <li key={i}>
                <svg width={10} height={10} viewBox="0 0 10 10">
                  <path d="M0 0 L0 10 L10 5 Z"></path>
                </svg>{" "}
                {location} ({i})
              </li>
            ))}
          </Locations>
        </div>
      </FilterWrap>

      <ul>
        {farmList?.map((farm, i) => {
          const { name, address, contact, price } = farm;
          return (
            <li key={i}>
              <div>농장명 : {name}</div>
              <div>주소 : {address}</div>
              <div>연락처 : {contact}</div>
              <div>가격 : {price}</div>
            </li>
          );
        })}
      </ul>
    </S.ContainerBox>
  );
};

const Container = styled.div`
  margin-top: 200px;
`;

const FilterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Locations = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px 0;
  border-top: 1px #dedede solid;
  border-bottom: 1px #dedede solid;
`;

export const getStaticProps = async () => {
  const farmList: Farm[] = [
    {
      addressCategory: "강서구",
      address: "서울 강서구 오곡동 518-2",
      name: "과해 주말 농장",
      ownerName: "",
      contact: "010-3720-9520",
      price: 10000,
      startTime: 0,
      endTime: 0,
      isLesson: true,
    },
  ];

  return {
    props: {
      farmList,
    },
  };
};

export default Index;
