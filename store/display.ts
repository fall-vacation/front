import create from "zustand";

export enum DisplayType {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
}
const useDisplayStore = create<{ type: DisplayType; setType: (value: DisplayType) => void; istablet: () => boolean; ismobile: () => boolean; isdesktop: () => boolean }>((set, get) => ({
  type: DisplayType.DESKTOP,
  setType: (value: DisplayType) => set(() => ({ type: value })),
  ismobile: () => get().type === DisplayType.MOBILE,
  istablet: () => get().type === DisplayType.TABLET,
  isdesktop: () => get().type === DisplayType.DESKTOP,
}));

export default useDisplayStore;
