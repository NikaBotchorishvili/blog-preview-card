/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		colors: {
			primary: "hsl(47, 88%, 63%)",
			white: "hsl(0, 0%, 100%)",
			grey: "hsl(0, 0%, 50%)",
			black: "hsl(0, 0%, 7%)",
		},
		fontFamily: {
			main: "'Figtree', sans-serif",
		},
		extend: {},
	},
	plugins: [],
};
