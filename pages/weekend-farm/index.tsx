import { Farm } from "@/types/index";

type Props = {
  farmList: Farm[];
};

const Index = ({ farmList }: Props) => {
  // const { farmList } = useFarms();

  return (
    <div>
      <h2>위켄드팜</h2>
      <ul>
        {farmList?.map((farm) => {
          const { name, address, contact, price } = farm;
          return (
            <li>
              <div>농장명 : {name}</div>
              <div>주소 : {address}</div>
              <div>연락처 : {contact}</div>
              <div>가격 : {price}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

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
