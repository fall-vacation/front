export const getComments = async () => {
  return [
    {
      id: "1",
      body: "향도 좋고 배송도 빠르고 좋았습니다~  친구들이 너무 좋아해 ...",
      username: "한재님!",
      userId: "rnjsrbgud@naver.com",
      parentId: null,
      createdAt: "2022.03.06",
    },
    {
      id: "2",
      body: "향도 좋고 배송도 빠르고 좋았습니다~  친구들이 너무 좋아해 ...",
      username: "루",
      userId: "rnjsrbgud@naver.com",
      parentId: null,
      createdAt: "2022.03.06",
    },
    {
      id: "3",
      body: "향도 좋고 배송도 빠르고 좋았습니다~  친구들이 너무 좋아해 ...",
      username: "마",
      userId: "rnjsrbgud@naver.com",
      parentId: "1",
      createdAt: "2022.03.06",
    },
    {
      id: "4",
      body: "향도 좋고 배송도 빠르고 좋았습니다~  친구들이 너무 좋아해 ...",
      username: "몰",
      userId: "rnjsrbgud@naver.com",
      parentId: "2",
      createdAt: "2022.03.06",
    },
  ];
};

export const createComment = async (text: string, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text: string) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
