import { create } from "zustand";

export interface OptionType {
	value: string;
	label: string;
}

export interface TechCheckProps {
	fullname: string;
	businessEmail: string;
	companyName: string;
	helpWith: OptionType | null;
	teamSize: OptionType | null;
}

interface TechCheckResult {
	success: boolean;
	message: string;
}

interface TechCheckStoreProps {
	techChecks: TechCheckProps[];
	setTechCheck: (todos: TechCheckProps[]) => void;
	createTechCheck: (newTechCheck: TechCheckProps) => Promise<TechCheckResult>;
}

const useTechCheckStore = create<TechCheckStoreProps>((set) => ({
	techChecks: [] as TechCheckProps[],

	setTechCheck: (techChecks: TechCheckProps[]) => set({ techChecks }),

	createTechCheck: async (newTechCheck) => {
		console.log("Sending to backend:", newTechCheck); // ✅ add this
		if (!newTechCheck.fullname || !newTechCheck.businessEmail || !newTechCheck.helpWith) {
			return { success: false, message: "Please fill all inputs" };
		}
		const api = import.meta.env.VITE_API_URL_TECH_CHECK;

		const response = await fetch(api, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTechCheck),
		});

		const data = await response.json();

		if (!response.ok) {
			return { success: false, message: data.message };
		}

		set((state) => ({ techChecks: [...state.techChecks, data.data] }));
		return { success: true, message: data.message };
	},
}));

export default useTechCheckStore;
