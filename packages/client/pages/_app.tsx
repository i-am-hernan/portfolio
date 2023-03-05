import { createTheme } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { Layout } from "../components/Layout";
import { store } from "../store";

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
        {/* <Layout main={<Component {...pageProps} />} /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
};

export default App;
