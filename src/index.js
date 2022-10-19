import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from "styled-components";


const theme = {
  width: "200px",
  height: "50px",

  colors: {
    online: "green",
    offline: "red",
    title: "white",
  },

  backgroundColors: {
    main: "#e8eaed",
  },
  
  boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
  
  border: {
    main: "1px solid grey",
    borderTableRow: "1px solid #fafbfcd",
    borderList: "1px solid #d9d8d7",
  },

  borderRadius: "10px",

  textTransform: {
    uppercase: "uppercase",
    capitalize: "capitalize",
  }
    
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
