/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      backgroundImage: {
        userIcon: "srcappassetssaidbariconGroup 2353.svg",
        serviceImage: 'src/assets/landingPage/elaosboa79384 1.png'
      },
      screens: {
        xs: "300px",
        sm: "500px",
        xsm: "600px",

        md: "775px",
        mmd:"850px",
                // => @media (min-width: 768px) { ... }
        extramd: "900px",
        xxmd:'1050',
        xxlg:'1150',
        extralg: "1072px",
        lg: "1073px",
        // => @media (min-width: 1024px) { ... }

        xlb: "1290",
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        "greenAcc": "#324134",
        "hover":"#556c58",
        "greenD": " #141D15",
        "yellowAcc": " #F6C90E",
      
        "bg": "#EBEBEB",
        "oddRow": " #F8F8F8",
        "email": " #778D86",
        "bgEmp": " #ffffff99",
        'fileUploud': "#D9D9D9",
        'baform': '#ffffff99',
        'hr': '#cBcBcB',
        'Hr': ' #A6A6A6',
        'searchbg': '#ddd',
        'p': '#ACACAC',
        'landingBg': '#F2F2F2BF',
        'gradiant': '#fffbeb',
      'approved':'#00FC19',
      'rejected':'#FF0000',
      'pending':'#dcdCdC',
      



      },

      borderRadius: {
        dx: "6rem",
        sm: "0.5rem",
        xx: "59px",
        input: "10px",
        file: "15px",
      },
      boxShadow: {
        "3xl": "0px 15px 15px -5px rgba(56, 56, 56, 0.80)",
        "4xl": "0px 10px 10px 0px rgba(0, 0, 0, 0.25)",


        form: "0px 5px 10px 0px rgba(0, 0, 0, 0.25)",
        select: ` 0px 10px 10px 0px rgba(0, 0, 0, 0.25)`,

        shadowEmp: ` 0px 4px 25px 0px rgba(0, 0, 0, 0.25)`,
        employee: `0px 4px 6.8px 0px rgba(0, 0, 0, 0.05)`

      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'tinos': ['Tinos'],
        ' khand': ['Khand', 'sans-serif'],
        'ruwudu': ['Ruwudu', 'sans-serif'],
        'urdo': ['Noto Nastaliq Urdu', 'sans-serif'],
        'Stick': ['Stick No Bills']
      },
      width:{
        'editEmplyeInput':"42%"
      },
      fontSize:{
        label:"17px",
        lebelInputs:"17px"
      }
    },
  },
  plugins: [],
};

