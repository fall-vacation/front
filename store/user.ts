import create from "zustand";
import { UserStore } from "../types/type";

const useUserStore = create<UserStore>((set) => ({
  isLogin: false,
  setIsLogin: (data: boolean) => set(() => ({ isLogin: data })),
}));

export default useUserStore;
