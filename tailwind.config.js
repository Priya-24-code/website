/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui"],
				serif: ["Georgia", "ui-serif"],
				mono: ["SFMono-Regular", "ui-monospace"],
			},
			spacing: {
				72: "18rem",
				84: "21rem",
				96: "24rem",
			},
			borderRadius: {
				xl: "1rem",
				"2xl": "1.5rem",
			},
			screens: {
				"2xl": "1536px",
			},
		},
	},
	plugins: [],
};
