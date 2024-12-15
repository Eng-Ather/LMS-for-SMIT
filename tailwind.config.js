/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#2196F3",
        // primary: "#4984F0",
        // primary: "#1890ff",

        
        // navbar k liye color
        primary:"#5F9EE0",
        headingColor:"#1E3A8A",
        subHeadingColor: "#4CAF50",
        textColor:"#374151"
      },
     
    },
  },
  plugins: [],
};
