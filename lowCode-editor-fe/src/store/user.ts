import { create } from "zustand";

export interface UserStoreProps {
	isLogin: boolean; // 修正拼写
	userName?: string;
	login: () => void;
	logout: () => void;
}

export const useUserStore = create<UserStoreProps>((set) => ({
	isLogin: false, // 修正拼写

	login: () => set({ isLogin: true, userName: "admin" }), // 修正拼写并确保字符串正常
	logout: () => set({ isLogin: false }), // 修正拼写
}));
