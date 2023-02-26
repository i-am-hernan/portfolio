import { Provider } from "react-redux";
import { store } from "../store";
import { createTheme, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "../components/theme";
import { Layout } from "../components/Layout";
import React from "react";
const theme = createTheme(lightTheme);

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-0N29V0GV97"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-0N29V0GV97');`,
        }}
      />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </div>
  );
};

export default App;
