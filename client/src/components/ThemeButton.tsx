import { Moon, Sun } from "lucide-react";
import { useTheme } from "../providers/ThemeContext";
import React from "react";
const ThemeButton: React.FC = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<button onClick={toggleTheme} className="p-2 mx-4 cursor-pointer ml-auto">
			{theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
		</button>
	);
};

export default ThemeButton;
