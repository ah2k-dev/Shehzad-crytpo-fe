import { create } from "zustand";

export  const themeStore = create((set) => ({
  theme: "light",
  toggleTheme: () => set((state) => ({ theme: state.theme ==="light" ? "dark" :"light" })),

    
  
}));
