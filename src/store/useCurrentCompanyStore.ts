// named imports
import { create } from "zustand";

type CurrentCompanyStore = {
    company: string;
    setCompany: (company: string) => void;
};

export const useCurrentCompanyStore = create<CurrentCompanyStore>((set) => ({
    company: "All",
    setCompany: (company: string) => set({ company }),
}));
