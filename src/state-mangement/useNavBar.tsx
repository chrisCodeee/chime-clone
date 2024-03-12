import { create } from "zustand";

interface NavBarProps {
	state: boolean;
	closeMenu: () => void;
	openMenu: () => void;
}

const useNavBar = create<NavBarProps>((set) => ({
	state: false,
	closeMenu: () => set(() => ({ state: false })),
	openMenu: () => set(() => ({ state: true })),
}));

export default useNavBar;
