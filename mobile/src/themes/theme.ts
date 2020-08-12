import Landing from '../pages/Landing';

export var darkMode = false;

const darkTheme = ['#301d5c','#6449a6','#279c5b','#e0e0e0']

const lightTheme = ['#8257E5','#9871f5','#04d361','#fff']

var theme = {};

if(darkMode) {
  theme = {
    purple: darkTheme[0],
    purpleLight: darkTheme[1],
    green: darkTheme[2],
    white: darkTheme[3]
  }
} else {
  theme = {
    purple: lightTheme[0],
    purpleLight: lightTheme[1],
    green: lightTheme[2],
    white: lightTheme[3]
  }
}



export default theme;