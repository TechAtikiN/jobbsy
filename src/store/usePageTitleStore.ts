import { create } from "zustand";

type PageTitleStore = {
    title: string;
    setTitle: (title: string) => void;
};

export const usePageTitleStore = create<PageTitleStore>((set) => ({
    title: "Connecting you to jobs on a global scale",
    setTitle: (title: string) => set({ title }),
}));
