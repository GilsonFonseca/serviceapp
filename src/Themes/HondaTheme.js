
import { createTheme } from '@material-ui/core/styles';
import {cyan, yellow} from "@material-ui/core/colors";

// Or Create your Own theme:
 export const HondaTheme = createTheme({
  palette: {
    primary: {
      main: yellow[700],
      dark: yellow[800],
      light:yellow[500],
      contrastText: "#ffffff"
    },
    secondary: {
      main: cyan[700],
      dark: cyan[800],
      light:cyan[500],
      contrastText: "#ffffff"
    }
  }
});