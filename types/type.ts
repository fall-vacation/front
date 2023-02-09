import { ReactNode } from "react";
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

export interface CommentProps {
  id: string;
  body: string;
  username: string;
  userId: string;
  parentId: null;
  createdAt: string;
}

export type CommentList = {
  comment: CommentProps[];
};
