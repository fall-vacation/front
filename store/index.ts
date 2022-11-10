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

export const useUserStore = create(
  devtools<any>((set) => ({
    user: {},
    setUser: (data: any) => set((state: any) => ({ user: data })),
  }))
);
