import { NotVoid } from "lodash";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { FarmStore, CropStore } from "../types";

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
