enum Level {
  low = 1,
  middle,
  high,
}

export type Crop = {
  name: string;
  imageUrl: string;
  level: Level;
  startGrowth: number;
  endGrowth: number;
  temperature: number;
  description: string;
  caution?: string;
};

export type CropStore = {
  cropList: Crop[];
};

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
  imageUrl: string;
};

export type FarmStore = {
  farmList: Farm[];
};
