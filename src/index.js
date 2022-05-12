import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterMap from "./Routes/routes";
import { ThemeProvider } from '@material-ui/core/styles';
import { HondaTheme } from './Themes';
import { Provider } from 'react-redux';
import store from './Redux/store';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={HondaTheme}>
      <React.StrictMode>
        <BrowserRouter>
          <RouterMap />  
        </BrowserRouter> 
      </React.StrictMode>
    </ThemeProvider>   
  </Provider>
 
);