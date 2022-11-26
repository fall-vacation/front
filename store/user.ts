import create from "zustand";
import { devtools } from "zustand/middleware";
import { UserStore } from "../types/type";

const useUserStore = create(
  devtools<UserStore>((set) => ({
    isLogin: false,
    setIsLogin: (data: boolean) => set((state: UserStore) => ({ isLogin: data })),
  }))
);

export default useUserStore;
