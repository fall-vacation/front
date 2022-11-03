import { NotVoid } from "lodash";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { CropStore, FarmStore } from "../types/type";

export const useFarms = create(
  devtools<FarmStore>((set) => ({
    farmList: [],
  }))
);

export const useCrops = create(
  devtools<CropStore>((set) => ({
    cropList: [],
  }))
);
