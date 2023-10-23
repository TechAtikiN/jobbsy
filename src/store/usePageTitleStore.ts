// named imports
import { create } from "zustand";

type PageTitleStore = {
    title: string;
    setTitle: (title: string) => void;
};

export const usePageTitleStore = create<PageTitleStore>((set) => ({
    title: "Global connections and opportunities, endless",
    setTitle: (title: string) => set({ title }),
}));
