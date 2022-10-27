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
