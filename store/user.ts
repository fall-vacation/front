import create from "zustand";
import { persist } from "zustand/middleware";

type UserStore = {
  name: string;
  introduce: string;
  profileImg: string;
  isLogin: boolean;

  setName: (v: string) => void;
  setIntroduce: (v: string) => void;
  setIsLogin: (b: boolean) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  name: "???",
  setName: (v: string) => set(() => ({ name: v })),
  introduce: "??????",
  setIntroduce: (v: string) => set(() => ({ introduce: v })),
  isLogin: false,
  profileImg: "",
  setIsLogin: (data: boolean) => set(() => ({ isLogin: data })),
}));
