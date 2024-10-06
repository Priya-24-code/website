import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "../ui/button";
const ThemeToggle = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<Button className={"mx-1"} variant={"icon"} onClick={toggleTheme}>
			{theme === "light" ? <Moon className="size-5" /> : <Sun className="size-5" />}
		</Button>
	);
};

export default ThemeToggle;
