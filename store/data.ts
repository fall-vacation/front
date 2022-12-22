import { NotVoid } from "lodash";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { CropStore, FarmStore } from "../types/type";

const useFarms = create(
  devtools<FarmStore>((set) => ({
    farmList: [],
  }))
);

const useCrops = create(
  devtools<CropStore>((set) => ({
    cropList: [],
  }))
);

export { useFarms, useCrops };
