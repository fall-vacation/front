import SouthKorea from "@/components/pages/weekend-farm/south-korea";
import { Farm } from "../../types/type";
import styled from "styled-components";
import * as S from "../../components/pages/home/Title/style";
import Image from "next/image";
import dummyImage from "../../public/images/dummy_images.png";
type Props = {
  farmList: Farm[];
};

const MOCK_DATA = [
  {
    farm_id: 10,
    farm_name: "가을방학 농장",
    farm_address: "서울시 강남구 압구정로18길 7",
    farm_address_div: {
      div_1: "서울시",
      div_2: "강남구",
    },
    farm_urls: [
      {
        url_division: "네이버 지도",
        url: "https://naver.me/IGGWkl5Y",
      },
      {
        url_division: "카카오 지도",
        url: "http://kko.to/EA6rNkM2M2",
      },
      {
        url_division: "홈페이지",
        url: "www.homepage.com",
      },
      {
        url_division: "instagram",
        url: "https://www.instagram.com/soobinms/?hl=ko",
      },
    ],
    farm_image:
      "https://mediahub.seoul.go.kr/uploads/mediahub/2022/02/OgXTpScaEOrxSIZpxwloiMMMdBIHtLfe.png",
    farm_owner_name: "주인장",
    farm_owner_phone: "010-1234-5678",
    price: "시간당 5천만원",
    stars: 4.05,
    available_use_start: "10:00:00",
    available_use_end: "18:00:00",
    available_lesson: true,
    etc: "오랜 역사와 전통을 자랑하는 가을방학 농장",
    crops: ["딸기", "바나나", "사과", "파인애플"],
    tags: ["사장님이", "맛있고", "음식이", "친절해요"],
  },
  {
    farm_id: 11,
    farm_name: "겨울방학 농장",
    farm_address: "서울시 금천구 금천로 5959-0",
    farm_address_div: {
      div_1: "서울시",
      div_2: "금천구",
    },
    farm_urls: [
      {
        url_division: "홈페이지",
        url: "https://www.instagram.com/soobinms/?hl=ko",
      },
    ],
    farm_image:
      "https://mediahub.seoul.go.kr/uploads/mediahub/2022/02/OgXTpScaEOrxSIZpxwloiMMMdBIHtLfe.png",
    farm_owner_name: "산타클로스",
    farm_owner_phone: "010-9876-5432",
    price: "시간당 3천원",
    stars: 2.5,
    available_use_start: "08:00:00",
    available_use_end: "20:00:00",
    available_lesson: false,
    etc: "벌레가 끓고 할 말 없는 전통을 가진 박살난 농장",
    crops: ["피자", "돼지고기 앞다리살", "고추장"],
    tags: ["여기", "오지", "마세요"],
  },
];

const locations = [
  "도봉구",
  "노원구",
  "강북구",
  "성북구",
  "중랑구",
  "동대문구",
];

const Index = ({ farmList }: Props) => {
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
      <S.FarmListWrap>
        <div className="title_box">
          <h2 className="title">체험농장</h2>
          <div className="icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="list_box">
          {MOCK_DATA.map((el) => {
            const {
              farm_id,
              farm_name,
              farm_address,
              farm_address_div,
              farm_urls,
              farm_image,
              farm_owner_name,
              farm_owner_phone,
              price,
              stars,
              available_use_start,
              available_use_end,
              available_lesson,
              etc,
              crops,
              tags,
            } = el;
            return (
              <>
                <S.FarmListBox>
                  <div className="infomation">
                    <h2 className="farm_list">{farm_name}</h2>
                    <div className="img_box">
                      <Image
                        src={dummyImage}
                        alt="Picture of me"
                        width={445}
                        height={280}
                      />
                    </div>
                    <div className="adress_wrap">
                      <dl>
                        <dt>주소</dt>
                        <dd>{farm_address}</dd>
                      </dl>
                      <dl>
                        <dt>연락처</dt>
                        <dd>{farm_owner_phone}</dd>
                      </dl>
                      <dl>
                        <dt>홈페이지</dt>
                        <dd>
                          <ul>
                            {farm_urls.map((el, i) => (
                              <li key={i}>
                                {el.url_division} : {el.url}
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </dl>
                    </div>
                    <div className="hashtag_wrap">
                      <ul>
                        {tags.map((tag, i) => (
                          <li key={i}>#{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
                      <ul className="comment_wrap">
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </S.FarmListBox>
              </>
            );
          })}
        </div>
      </S.FarmListWrap>

      {/* 
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
      </ul> */}
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
      imageUrl: "",
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
