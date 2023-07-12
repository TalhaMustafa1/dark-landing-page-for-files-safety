
/** @type {import('tailwindcss').Config} */
const defaultTheme=require('tailwindcss/defaultTheme')
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        darkBlue:"hsl(217, 28%, 15%)",
        mainDarkBlue:"hsl(218, 28%, 13%)",
        darkBlueFooter:"hsl(216, 53%, 9%)",
        darBlueCards:"hsl(219, 30%, 18%)",
      },
      fontfamily:{
        primary:["'Raleway', sans-serif",...defaultTheme.fontFamily.sans],
        secondary:["' 'Open Sans', sans-serif'",...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'bg-image': "url('../images/bg-quotes')",
      },
      screens:{
        'xs':'375px',
      },
    },
  },
  plugins: [],
}

