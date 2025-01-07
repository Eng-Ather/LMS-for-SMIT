/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarColor: "#5F9EE0", // navbar k liye color
        headingColor: "#1E3A8A",
        subHeadingColor: "#4CAF50",
        textColor: "#374151",
      },
    },
  },
};
