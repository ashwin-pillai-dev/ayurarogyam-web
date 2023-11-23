/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 * 
 */

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',


  ],
  plugins: [
    require("flowbite/plugin"),
  ],
  darkMode: 'class',
  theme: {
    
    extend: {
      colors: {
       primary: {"50":"#D7E8D7","100":"#B4D1B4","200":"#91BB91","300":"#6E9A6E","400":"#4C7A4C","500":"#295929","600":"#244F24","700":"#1A5D1A","800":"#135213","900":"#0D3B0D"}

      }
    },
    
  
  }
};
