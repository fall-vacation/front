export type Farm = {
  addressCategory: string;
  address: string;
  name: string;
  ownerName: string;
  contact: string;
  price: number;
  startTime: number;
  endTime: number;
  isLesson: boolean;
  site?: string;
  etc?: any;
};

export type FarmStore = {
  farmList: Farm[];
};
