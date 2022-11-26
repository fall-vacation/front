import { useState, useEffect } from "react";
import Image from "next/image";
import { Crop } from "../../types/type";

type Props = {
  farmList: Crop[];
};

const Index = ({ farmList }: Props) => {
  return (
    <div>
      <h2>완이네 텃밭</h2>
      <ul>
        {farmList?.map((farm, i) => {
          const { name, imageUrl, level, temperature } = farm;
          return (
            <li key={i}>
              <div style={{ width: 100, height: 100 }}>
                <Image src={imageUrl} alt={name} layout="responsive" width={100} height={100} />
              </div>
              <div>작물명 : {name}</div>
              <div>레벨 : {level}</div>
              <div>온도 : {temperature}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const farmList: Crop[] = [
    {
      name: "딸기",
      imageUrl:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MTZfMjAz%2FMDAxNjYzMzIxNjg5NTQw.S0XkvdhQuVOOYpVwLOXEICk_wWtIl_aj0cj9wnZo5T0g.DC0mk6wTC81cIl4gh_SLYt-y3Zy6B6spnxExuKUrv9Ig.JPEG.supia-%2FIMG_8592.JPG&type=a340",
      level: 0,
      startGrowth: 1,
      endGrowth: 7,
      temperature: 20,
      description: "",
      caution: "",
    },
  ];

  return {
    props: {
      farmList,
    },
  };
};

export default Index;
