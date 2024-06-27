/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}",   "./node_modules/flowbite/**/*.js", "./node_modules/tw-elements/js/**/*.js" ],
  theme: {
    extend: {
      backgroundImage: {
        Hero: "url('/src/images/Hero.jpg)",
        save: "url('/src/images/save-world.jpeg') ",
        facebook: "url('[.././icons/LinkedIn.png] ') ",
        Twitter: "url('/src/icons/Twitter.png') ",
        Pattern: "url('/src/images/vegetation.png') ",
        Home: "url('/src/images/home-picture.jpg') ",
        Vert: "url('/src/images/120 Litre Wheelie Bin _ Blue.jpeg') ",
        Recyclage: "url('/src/images/recyclage-dechets.jpg') ",
        HeroHome: " url('/src/images/Hero2.jpeg') "
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin', 'tailwindcss-animated', "tw-elements/plugin.cjs")
]};

