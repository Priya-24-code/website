/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#4d1ecf",
				secondary: "#0fa",
				tertiary: "#58534C",
			},
		},
	},
	plugins: [],
};
